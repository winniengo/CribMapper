export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(listings) {
    this.listings = listings;
    this.listingIds = this.listings.map(listing => listing.id);

    this._listingsToAdd().forEach(this._createMarker.bind(this));
    this._markersToRemove().forEach(this._removeMarker.bind(this));
  }

  _listingsToAdd() {
    const currentBenchIds = this.markers.map(marker => marker.listingId);

    return this.listings.filter(listing => (
      !currentBenchIds.includes(listing.id)
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
      position
    });
    this.markers.push(marker);
  }

  _removeMarker(marker) { // receives marker object
    const idx = this.markers.indexOf(marker);
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
