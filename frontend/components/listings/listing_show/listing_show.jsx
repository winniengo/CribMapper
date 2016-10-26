import React from 'react';
import { withRouter } from 'react-router';

import ListingShowDetails from './listing_show_details';
import ListingShowContact from './listing_show_contact';
// import ListingCarousel from '../listing_carousel';

const _emptyListing = {
  id: "",
  lat: "",
  lng: "",
  description: "",
  address: "",
  rent: "",
  bedrooms: "",
  bathrooms: "",
  listingType: "",
  images: []
};

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing || _emptyListing;

    this.returnToListings = this.returnToListings.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.listing);
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
      listingType,
      images } = this.state;

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
          <img />
          <description>{description}</description>
        </section>
        <section className="listing-sidebar">
          <ListingShowDetails listing={this.state}/>
          <ListingShowContact contact={""}/>
        </section>
      </div>
    );
  }
}

export default withRouter(ListingShow);
