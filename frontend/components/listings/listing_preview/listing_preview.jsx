import React from 'react';
import { withRouter } from 'react-router';

import FavoriteButtonContainer from '../../buttons/favorite_button_container';
import ListingPreviewGallery from '../listing_preview_gallery';
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
        <section className='sidebar-buttons'>
          <button
            className="back-to-results"
            onClick={this.returnToListings}>
            ← back to results
          </button>
          <button
            onClick={this.redirectToDetails}>
            more details
          </button>
        </section>
        <ListingPreviewGallery images={listing.images} />
        <section>
          <h2>${listing.rent}</h2>
          <div className='details'>
            <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
            <h4>{listing.listingType}</h4>
          </div>
          <FavoriteButtonContainer id={listing.id} />
        </section>
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
