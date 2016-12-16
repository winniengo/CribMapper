import React from 'react';

import CommuteButtonContainer from '../buttons/commute_button_container';
import RouteView from './route_view';
import PanelView from './panel_view';
import Tabs from '../tabs';

class ListingCommute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelMode: 'driving',
      duration: '???',
      distance: '???',
      selected: 'route-view'
    }

    this.handleClick = this.handleClick.bind(this);
    this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);

    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.origin.lat !== nextProps.origin.lat ||
      this.props.destination.lat !== nextProps.destination.lat) { // received new lat, lng
      this.calculateAndDisplayRoute(nextProps);
    }
  }

  componentDidMount() {
    // this.directionsService = new google.maps.DirectionsService;
    // this.directionsDisplay = new google.maps.DirectionsRenderer;

    // this.initMap();
    // this.directionsDisplay.setMap(this.map);
    // this.directionsDisplay.setPanel(document.getElementById('panel-view'));
    this.calculateAndDisplayRoute();
  }

  // initMap() {
  //   const mapDOMNode = document.getElementById('route-view');
  //   const mapOptions = {
  //     center: {
  //       lat: this.props.lat || 37.7749,
  //       lng: this.props.lng || -122.4197
  //     },
  //     zoom: 17,
  //     scrollwheel: false
  //   };
  //   this.map = new google.maps.Map(mapDOMNode, mapOptions);
  // }

  calculateAndDisplayRoute(props) {
    console.log('calculating...');
    const { origin, destination } = props || this.props;

    if (!origin.lat || !destination.lat) {
      return;
    }

    this.directionsService.route({
      origin: `${origin.lat},${origin.lng}`,
      destination: `${destination.lat},${destination.lng}`,
      travelMode: this.state.travelMode.toUpperCase()
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        this.setState({
          distance: response.routes[0].legs[0].distance.text,
          duration: response.routes[0].legs[0].duration.text
        });
      } else {
        console.log(`Directions request failed due to ${status}`);
      }
    })
  }

  handleClick(travelMode) {
    return () => this.setState({ travelMode }, () => this.calculateAndDisplayRoute());
  }

  renderFields() {
    return (
      ['driving', 'transit', 'walking'].map((travelMode, idx) => (
        <button
          className={this.state.travelMode === travelMode ? 'selected' : ''}
          onClick={this.handleClick(travelMode)}
          key={idx}>
          <div className={`background-img icon ${travelMode}`} />
        </button>
      ))
    );
  }

  render() {
    const { lat, lng } = this.props;

    // <RouteView lat={lat} lng={lng} directionsDisplay={this.directionsDisplay} />

    return (
      <section className='listing-commute'>
        <header>
          <h3>Calculate your Commute</h3>
          <CommuteButtonContainer />
        </header>
        <section>
          <div className='commute fields'>
            {this.renderFields()}
          </div>
          <section className='listing-details'>
            <ul>
              <li>Distance<p>{this.state.distance}</p></li>
              <li>Duration<p>{this.state.duration}</p></li>
            </ul>
          </section>
        </section>
        <Tabs tabs={['route-view', 'panel-view']} views={[<RouteView lat={lat} lng={lng} directionsDisplay={this.directionsDisplay} />, <PanelView directionsDisplay={this.directionsDisplay} />]} />
      </section>
    );
  }
}

export default ListingCommute;





  // <div>
  //   <div className="views">
  //     {this.renderButtons()}
  //   </div>
  //   <section className='view'>
  //     <div id='listing-commute-map' />
  //     <div id='listing-commute-panel' />
  //   </section>
  // </div>
