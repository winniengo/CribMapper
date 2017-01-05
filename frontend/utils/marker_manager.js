const icon = 'https://res.cloudinary.com/dbgp4ftst/image/upload/v1483582122/icons/pointer-coral.png';
const selected = 'https://res.cloudinary.com/dbgp4ftst/image/upload/v1483582122/icons/pointer-navy.png';

export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;

    this.markers = [];
    this.selectedMarker = null;
  }

  updateMarkers(listings) {
    this.listings = listings;
    this.listingIds = this.listings.map(({ id }) => id);

    this._listingsToAdd().forEach(this._createMarker.bind(this));
    this._markersToRemove().forEach(this._removeMarker.bind(this));
  }

  _listingsToAdd() {
    const currentListingIds = this.markers.map(({ listingId }) => listingId);
    return this.listings.filter(({ id }) => !currentListingIds.includes(id));
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
      position,
      icon,
    });

    marker.addListener('click', () => this.handleClick(marker.listingId));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    marker.setMap(null);
    this.markers.splice(this.markers.indexOf(marker), 1);
  }

  selectMarker(selectedId) {
    if (this.selectedMarker) { // reset previously selected marker
      this.selectedMarker.setIcon(icon);
    }

    if (selectedId) {
      for (let i = 0; i < this.markers.length; i++) {
        if (this.markers[i].listingId === parseInt(selectedId)) { // set selected marker
          this.selectedMarker = this.markers[i]
          this.selectedMarker.setIcon(selected);
          return;
        }
      }
    } else {
      if (this.selectedMarker) {
        this.selectedMarker = null;
      }
    }
  }
}
