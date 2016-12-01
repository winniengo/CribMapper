import React from 'react';
import { withRouter } from 'react-router';

import FavoriteButtonContainer from '../../buttons/favorite_button_container';
import ListingGallery from '../listing_gallery';
import ListingCommute from '../listing_commute';

class ListingPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0}

    this.returnToListings = this.returnToListings.bind(this);
    this.redirectToDetails = this.redirectToDetails.bind(this);
  }

  returnToListings() {
    this.props.deselect();
    this.props.router.push('/search/index');
  }

  redirectToDetails() {
    this.props.router.push(`/listings/${this.props.listing.id}`);
  }

  render() {
    const { listing, destination } = this.props;

    return (
      <div className='listing-preview'>
        <section className='sidebar-btns'>
          <button
            className='hvr-fade'
            onClick={this.returnToListings}>
            ← back to results
          </button>
          <button
            className='hvr-fade'
            onClick={this.redirectToDetails}>
            more details
          </button>
        </section>
        <ListingGallery images={listing.images} />
        <header>
          <h2>${listing.rent}</h2>
          <div className='details'>
            <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
            <h4>{listing.listingType}</h4>
          </div>
          <FavoriteButtonContainer id={listing.id} />
        </header>
        <description>
          {listing.description}
        </description>
        <ListingCommute
          origin={{lat: listing.lat, lng: listing.lng}}
          destination={{lat: destination.lat, lng: destination.lng}} />
      </div>
    );
  }
};


export default withRouter(ListingPreview);
