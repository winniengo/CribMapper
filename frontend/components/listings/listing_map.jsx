import React from 'react';

const icon = 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478649422/listings/pointer-coral.png';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initMap(); // render google map and markers
  }

  componentWillReceiveProps({ listings }) {
    this.updateMap(listings);
  }

  // componentWillUnmount () {
  //   this.markers.forEach(marker => marker.setMap(null));
  //   this.markers = [];
  // }

  initMap() {
    const mapOptions = {
      center: {lat: 37.7749, lng: -122.4197},
      zoom: 13,
      scrollwheel: false
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.bounds = new google.maps.LatLngBounds();
    this.markers = [];

    this.updateMap(this.props.listings);
  }

  updateMarkers(listings) {
    this.markers.forEach(marker => marker.setMap(null));

    this.markers = listings.map(listing => {
      const position = { lat: listing.lat, lng: listing.lng };
      this.bounds.extend(position);
      const marker = new google.maps.Marker({
        map: this.map,
        position,
        icon,
      });
      marker.addListener('click', this.props.handleClick(listing));
      return marker;
    });
  }

  updateMap(listings) {
    this.updateMarkers(listings);
    this.map.setCenter(this.bounds.getCenter());
    this.map.fitBounds(this.bounds);
  }

  render() {
    return <div id='map' />;
  }
}

export default ListingMap;
