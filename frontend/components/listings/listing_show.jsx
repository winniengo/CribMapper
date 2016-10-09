import React from 'react';
import { withRouter } from 'react-router';

import Details from './details';
import Contact from './contact';

const _emptyListing = {
  id: "",
  lat: "",
  lng: "",
  description: "",
  address: "",
  rent: "",
  bedrooms: "",
  bathrooms: "",
  listingType: ""
};

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    const listing = this.props.listings[this.props.params.id];
    this.state = listing || _emptyListing;

    this.returnToListings = this.returnToListings.bind(this);
  }

  componentWillReceiveProps({ listings, params }) {
    const listing = listings[params.id];
    this.setState(listing);
  }

  returnToListings(e) {
    e.preventDefault();
    this.props.router.goBack();
  }

  render() {
    const {
      description,
      address,
      rent,
      bedrooms,
      bathrooms,
      cats,
      dogs,
      fee,
      parking,
      listingType } = this.state;

    const header = `$${rent} - ${bedrooms} Bed / ${bathrooms} Bath`;

    return (
      <div className='listing-show'>
        <section className="listing-main">
          <button
            type="button"
            onClick={this.returnToListings}>
            ← Back to results
          </button>
          <h2>{header}</h2>
          <h3>{address}</h3>
          <description>{description}</description>
        </section>
        <section className="listing-sidebar">
          <Details listing={this.state}/>
          <Contact contact={""}/>
        </section>
      </div>
    );
  }
}

export default withRouter(ListingShow);
