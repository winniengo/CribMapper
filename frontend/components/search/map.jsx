import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import MarkerManager from '../../utils/marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapDOMNode = document.getElementById('map');

    const mapOptions = { // default to sf
      center: {
        lat: 37.7749,
        lng: -122.4194
      },
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
    this._registerListeners();
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.listings);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: {
          lat: north,
          lng: east
        },
        southWest: {
          lat: south,
          lng: west
        }
      };

      this.props.updateBounds(bounds);
    });

    // google.maps.event.addListener(this.map, 'click', (e) => {
    //   this._handleClick({
    //     lat: e.latLng.lat(),
    //     lng: e.latLng.lng()
    //   });
    // });
  }

  render() {
    return (
      <div id='map'>
      </div>
    );
  }

}

export default Map;
