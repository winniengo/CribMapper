import React from 'react';

const icon = 'https://res.cloudinary.com/dbgp4ftst/image/upload/v1478649431/icons/pointer-navy.png';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat || 37.7749,
      lng: this.props.lng || -122.4194
    };
  }

  componentDidMount() {
    const mapOptions = {
      center: this.state,
      zoom: 12,
      scrollwheel: false,
      styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };
    this.map = new google.maps.Map(document.getElementById('map-view'), mapOptions);

    this.marker = new google.maps.Marker({
      position: this.state,
      map: this.map,
      icon
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lat: nextProps.lat || 37.7749,
      lng: nextProps.lng || -122.4194
    }, this.updateMap);
  }

  updateMap() { // update marker and center map
    this.marker.setPosition(this.state);
    this.map.setCenter(this.state);
  }

  render() {
    return <div id='map-view' />;
  }
}

export default MapView;
