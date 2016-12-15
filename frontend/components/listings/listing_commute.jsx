import React from 'react';

import CommuteButtonContainer from '../buttons/commute_button_container';

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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.origin.lat !== nextProps.origin.lat ||
      this.props.destination.lat !== nextProps.destination.lat) { // received new lat, lng
      this.calculateAndDisplayRoute(nextProps);
    }
  }

  componentDidMount() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;

    this.initMap();
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(document.getElementById('listing-commute-panel'));
    this.calculateAndDisplayRoute();
  }

  initMap() {
    const mapDOMNode = document.getElementById('listing-commute-map');
    const mapOptions = {
      center: {
        lat: this.props.lat || 37.7749,
        lng: this.props.lng || -122.4197
      },
      zoom: 17,
      scrollwheel: false
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  calculateAndDisplayRoute(props) {
    // console.log('calculating');
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
        window.alert(`Directions request failed due to ${status}`);
      }
    })
  }

  handleClick(travelMode) {
    return () => this.setState({ travelMode }, () => this.calculateAndDisplayRoute());
  }

  // renderButtons() {
  //   return (
  //     ['route-view', 'panel-view'].map((view, idx) => (
  //       <button
  //         key={idx}
  //         type="button"
  //         value={view}
  //         onClick={this.handleClick}
  //         className={`hvr-underline-from-center ${this.state.selected === view ? 'selected' : ''}`}>
  //         <div className={`background-img icon ${view}`} />
  //       </button>
  //     ))
  //   )
  // }

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
         <div id='listing-commute-map' />
        <div id='listing-commute-panel' />
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
