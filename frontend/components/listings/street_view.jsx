import React from 'react';

class StreetView extends React.Component {
  constructor(props) {
    super(props);

    this.updateStreetView = this.updateStreetView.bind(this);
  }

  componentDidMount() {
    if (this.props.lat && this.props.lng) {
      this.updateStreetView(this.props.lat, this.props.lng);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.lat && newProps.lng) {
      this.updateStreetView(newProps.lat, newProps.lng);
    }
  }

  updateStreetView(lat = 37.7749, lng = -122.4194) {
    this.panorama = new google.maps.StreetViewPanorama(
      document.getElementById('street-view'), {
        position: { lat, lng },
        pov: {
          heading: 34,
          pitch: 10
        }
      }
    );
  }

  render() {
    return <div id='street-view' />;
  }
}

export default StreetView;
