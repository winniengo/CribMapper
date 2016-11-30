import React from 'react';

import CommuteButtonContainer from '../buttons/commute_button_container';

class ListingCommute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelMode: "DRIVING",
      duration: "?",
      distance: "?"
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
    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute(props) {
    const { origin, destination } = props || this.props;

    if (!origin.lat || !destination.lat) {
      return;
    }

    this.directionsService.route({
      origin: `${origin.lat},${origin.lng}`,
      destination: `${destination.lat},${destination.lng}`,
      travelMode: this.state.travelMode
    }, (response, status) => {
      if (status === "OK") {
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
    return e => this.setState({
       travelMode
     }, () => this.calculateAndDisplayRoute());
  }

  render() {
    return (
      <section className="listing-commute">
        <header>
          <h3>Calculate your Commute</h3>
          <CommuteButtonContainer />
        </header>
        <section>
          <div className="commute fields">
            <button
              className={this.state.travelMode === "DRIVING" ? 'selected' : ''}
              onClick={this.handleClick("DRIVING")}>
              <div className="background-img driving icon" />
            </button>
            <button
              className={this.state.travelMode === "TRANSIT" ? 'selected' : ''}
              onClick={this.handleClick("TRANSIT")}>
              <div className="background-img transit icon" />
            </button>
            <button
              className={this.state.travelMode === "WALKING" ? 'selected' : ''}
              onClick={this.handleClick("WALKING")}>
              <div className="background-img walking icon" />
            </button>

          </div>
          <section className="listing-details">
            <ul>
              <li>Distance<p>{this.state.distance}</p></li>
              <li>Duration<p>{this.state.duration}</p></li>
            </ul>
          </section>
        </section>
        <div id="listing-commute-map" />
      </section>
    );
  }
}

export default ListingCommute;
