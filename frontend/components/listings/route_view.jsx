import React from 'react';

class RouteView extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const map = new google.maps.Map(
      document.getElementById('route-view'), {
        center: {
          lat: this.props.lat || 37.7749,
          lng: this.props.lng || -122.4197
        },
        zoom: 17,
        scrollwheel: false
      });

    this.props.directionsDisplay.setMap(map);
  }

  render() {
    return <div id='route-view' />;
  }
}

export default RouteView;
