import React from 'react';

const icon = 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478649431/icons/pointer-navy.png';

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
      scrollwheel: false
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
