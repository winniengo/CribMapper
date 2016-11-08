import { hashHistory } from 'react-router';

const icon = 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478636840/listings/pointer.png';

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(listings) {
    this.listings = listings;
    this.listingIds = this.listings.map(({ id }) => id);

    this._listingsToAdd().forEach(this._createMarker.bind(this));
    this._markersToRemove().forEach(this._removeMarker.bind(this));
  }

  _listingsToAdd() {
    const currentListingIds = this.markers.map(({ listingId }) => listingId);

    return this.listings.filter(({ id }) => (
      !currentListingIds.includes(id)
    ));
  }

  _markersToRemove() {
    return this.markers.filter(marker => (
      !this.listingIds.includes(marker.listingId)
    ));
  }

  _createMarker({ lat, lng, id }) { // receives listing object
    const position = new google.maps.LatLng(lat, lng);
    const marker = new google.maps.Marker({
      map: this.map,
      listingId: id,
      icon,
      position
    });

    this._addListeners(marker);
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    marker.setMap(null);
    this.markers.splice(this.markers.indexOf(marker), 1);
  }

  _addListeners(marker) {
    marker.addListener('mouseover', e => {
      this._addBounce(marker);
    });

    marker.addListener('mouseout', e => {
      this._removeBounce(marker);
    });

    marker.addListener('click', e => hasHistory.push('/listings/${marker.listingId}'));
  }

  _addBounce(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }

  _removeBounce(marker) {
    marker.setAnimation(null);
  }
}
