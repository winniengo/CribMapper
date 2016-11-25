import React from 'react';

class StreetView extends React.Component {
  constructor(props) {
    super(props);

    this.renderStreetView = this.renderStreetView.bind(this);
  }

  componentDidMount() {
    if (this.props.lat && this.props.lng) {
      this.renderStreetView(this.props.lat, this.props.lng);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.lat && newProps.lng) {
      this.renderStreetView(newProps.lat, newProps.lng);
    }
  }

  renderStreetView(lat, lng) {
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
    return (
      <section>
        <h3>Street View</h3>
        <div id='street-view'/>
      </section>
    )
  }
}

export default StreetView;
