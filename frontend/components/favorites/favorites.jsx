import React from 'react';

class Favorites extends React.Component{
  constructor(props) {
    super(props);
    this.state = {address: ""};

    this.codeAddress = this.codeAddress.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  componentDidMount() {
    const mapDOMNode = document.getElementById('commute-map');

    const mapOptions = { // default to sf
      center: {
        lat: 37.7749,
        lng: -122.4194
      },
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.geocoder = new google.maps.Geocoder();

  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.router.push('/');
    }
  }

  codeAddress() {
    this.geocoder.geocode({'address': this.state.address}, (results, status) => {
      if (status == 'OK') {
        this.map.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map: this.map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    })
  }

  updateAddress(e) {
    this.setState({address: e.target.value})
  }

  render() {
    return (
      <div>
        <div id="commute-map"/>
        <form>
          <input
            type="text"
            placeholder="San Franciso, CA"
            value={this.state.address}
            onChange={this.updateAddress} />
          <input type="button" value="Encode" onClick={this.codeAddress}/>
        </form>
      </div>
    );
  }
}

export default Favorites;

  // var geocoder;
  // var map;
  // function initialize() {
  //   geocoder = new google.maps.Geocoder();
  //   var latlng = new google.maps.LatLng(-34.397, 150.644);
  //   var mapOptions = {
  //     zoom: 8,
  //     center: latlng
  //   }
  //   map = new google.maps.Map(document.getElementById('map'), mapOptions);
  // }
  //
  // function codeAddress() {
  //   var address = document.getElementById('address').value;
  //   geocoder.geocode( { 'address': address}, function(results, status) {
  //     if (status == 'OK') {
  //       map.setCenter(results[0].geometry.location);
  //       var marker = new google.maps.Marker({
  //           map: map,
  //           position: results[0].geometry.location
  //       });
  //     } else {
  //       alert('Geocode was not successful for the following reason: ' + status);
  //     }
  //   });
  // }
