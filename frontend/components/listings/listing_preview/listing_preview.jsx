import React from 'react';
import { withRouter } from 'react-router';

import ListingPreviewGallery from './listing_preview_gallery';

class ListingPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0}

    this.returnToListings = this.returnToListings.bind(this);
    this.redirectToDetails = this.redirectToDetails.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite() {
    if (this.props.favorited) {
      this.props.unfavoriteListing();
    } else {
      this.props.favoriteListing();
    }
  }

  returnToListings() {
    this.props.router.push('/search/index');
  }

  redirectToDetails() {
    this.props.router.push(`/listings/${this.props.listing.id}`);
  }

  render() {
    const {
      listing,
      favorited,
      favoriteListing,
      unfavoriteListing
    } = this.props;

    const clssName = favorited ? 'favorited' : 'unfavorited';

    return (
      <div className='listing-preview'>
        <ListingPreviewGallery images={listing.images} />
        <description>
          <h3>${listing.rent}</h3>
          <div className='details'>
            <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
            <h4>{listing.listingType}</h4>
          </div>
          <button
            className={`favorite-icon ${clssName}`}
            onClick={this.handleFavorite} />
        </description>
        <section>
          <button
            className='back-to-results'
            onClick={this.returnToListings}>
            ← Back to results
          </button>
          <button
            className='back-to-results'
            onClick={this.redirectToDetails}>
            More Details
          </button>
        </section>
      </div>
    );
  }
};


export default withRouter(ListingPreview);
