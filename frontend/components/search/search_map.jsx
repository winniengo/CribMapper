import React from 'react';
import ReactDOM from 'react-dom';

import MarkerManager from '../../utils/marker_manager';

const center = {lat: 37.7749, lng: -122.4194}; // default to sf

class SearchMap extends React.Component {
  constructor(props) {
    super(props);

    this.center = center;
    this.zoom = 13;

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.initMap(); // initialize google map
    this.initMarkers(); // initialize markers

    if (this.props.pathname.includes('favorites')) {
      this.setBounds(this.props.listings); // center map
    } else {
      this.registerListener(); // set listener
    }
  }

  initMap() {
    const mapOptions = {
      center: this.center,
      zoom: this.zoom,
      scrollwheel: false
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  initMarkers() {
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.MarkerManager.updateMarkers(this.props.listings);
    this.MarkerManager.selectMarker(this.props.selectedId);
  }

  setBounds(listings) {
    if (listings.length === 0) {
      this.map.setCenter(center);
    } else {
      let bounds = new google.maps.LatLngBounds();
      listings.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
      this.map.setCenter(bounds.getCenter());
      this.map.fitBounds(bounds);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pathname.includes('favorites')) {
      if (this.props.pathname.includes('search')) {
        this.removeListener();
        
        this.center = this.map.getCenter(); // save map search params
        this.zoom = this.map.getZoom();
      }

        this.setBounds(nextProps.listings);
    } else if (this.props.pathname.includes('favorites') && nextProps.pathname.includes('search')) {
      this.registerListener();

      this.map.setCenter(this.center); // set to most recent map search params
      this.map.setZoom(this.zoom);
    }

    this.MarkerManager.updateMarkers(nextProps.listings);
    this.MarkerManager.selectMarker(nextProps.selectedId);
  }

  handleClick(listingId) {
    if (this.props.pathname.includes('search')) {
      this.props.router.push(`/search/${listingId}`);
    } else {
      this.props.router.push(`/favorites/${listingId}`)
    }
  }

  registerListener() {
    this.listener = google.maps.event.addListener(this.map, 'idle', () => {
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

  removeListener() {
    if (this.listener) {
      google.maps.event.removeListener(this.listener);
      this.listner = null;
    }
  }

  render() {
    return <div id='map' />;
  }

}

export default SearchMap;
