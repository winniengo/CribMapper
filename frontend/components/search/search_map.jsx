import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';

import MarkerManager from '../../utils/marker_manager';

class SearchMap extends React.Component {
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
      zoom: 12,
      scrollwheel: false
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.MarkerManager.updateMarkers(this.props.listings);
    this.MarkerManager.styleMarkers(this.props.selected, this.props.hovered);
    this._registerListeners();
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.listings);
    this.MarkerManager.styleMarkers(nextProps.selected, nextProps.hovered);
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
  }

  render() {
    return <div id='map' />;
  }

}

export default SearchMap;
