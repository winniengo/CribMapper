import React from 'react';

class CommuteForm extends React.Component{
  constructor(props) {
    super(props);
    const { lat, lng, place_id, address } = this.props.currentUser;
    this.state = { lat, lng, place_id, address };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { // using google map and google places apis
    this.initMap();
    this.initAutocomplete();
  }

  initMap() {
    const mapDOMNode = document.getElementById('commute-map');
    const mapOptions = { // default to sf
      center: {
        lat: this.state.lat || 37.7749,
        lng: this.state.lng || -122.4194
      },
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  initAutocomplete() {
    const input = document.getElementById('pac-input');
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', this.map);

    const infoWindow = new google.maps.InfoWindow();
    const marker = new google.maps.Marker({
      map: this.map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', () => {
      infoWindow.close();
      marker.setVisible(false);
      const place = autocomplete.getPlace();

      if (!place.geometry) { // place does not exist or request failed
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // present selected place on the map
      if (place.geometry.viewport) {
        this.map.fitBounds(place.geometry.viewport);
      } else {
        this.map.setCenter(place.geometry.location);
        this.map.setZoom(17);
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      infoWindow.setContent(`<div><strong>${place.name}</strong></div>`);
      infoWindow.open(this.map, marker);

      // update state with selected place
      this.setState({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        place_id: place.place_id,
        address: place.formatted_address
      })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCurrentUser(this.state);
  }

  render() {
    const verb = this.props.currentUser.place_id ? 'Update' : 'Add';
    return (
      <div className='work modal'>
        <div className='modal-form'>
          <section className='header'>
            <h2>{`${verb} your Work Address`}</h2>
            to calculate the commute to your perfect rental
          </section>
          <form onSubmit={this.handleSubmit}>
            <div id="commute-map"/>
            <label>
              <input
                id="pac-input"
                className="controls"
                type="text"
                placeholder={this.state.address || "Search"} />
            </label>
            <input type="submit" value={`${verb}`} className="modal-btn"/>
          </form>
          <section className='footer'>
            <div className='logo-img background-img' />
          </section>
        </div>
      </div>
    );
  }
}

export default CommuteForm;
