const icon = 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478649422/icons/pointer-coral.png';
const selected = 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478649431/icons/pointer-navy.png';

export default class MarkerManager {
  constructor(map, handleClick) {
    this.handleClick = handleClick;

    this.map = map;
    this.markers = [];
    // this.hovered = [];
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

  // styleMarkers(selectedId, hoveredId) {
    // if (selectedId) {
    //   if (this.hovered.length !== 0) {
    //     this._removeIcon();
    //   }
    //   this.selected = this.markers.filter(({ listingId }) => listingId === selectedId);
    //   this._addIcon();
    // } else {
    //   this._removeIcon();
    // }
    //
    // if (hoveredId) {
    //   if (this.hovered.length !== 0) {
    //     this._removeBounce();
    //   }
    //   this.hovered = this.markers.filter(({ listingId }) => listingId === hoveredId);
    //   // console.log(this.hovered)
    //   this._addBounce();
    // } else {
    //   this._removeBounce();
    // }
  // }
  //
  // _addStyleListeners(marker) {
  //   marker.addListener('mouseover', e => {
  //     this.hovered.push(marker);
  //     this._addBounce();
  //   });
  //
  //   marker.addListener('mouseout', e => {
  //     this._removeBounce();
  //   });
  // }
  //
  // _addBounce() {
  //   // console.log(this.hovered)
  //     // this.hovered.forEach(marker => marker.setIcon(hovered));
  //   this.hovered.forEach(marker => marker.setAnimation(google.maps.Animation.BOUNCE));
  // }
  //
  // _removeBounce() {
  //       this.hovered.forEach(marker => marker.setAnimation(null));
  //   // this.markers.forEach(marker => marker.setIcon(icon));
  //   this.hovered = [];
  // }
}
