import React from 'react';
import { withRouter } from 'react-router';

import FavoriteIconContainer from '../../favorites/favorite_icon_container';
import ListingPreviewGallery from './listing_preview_gallery';
import StreetView from '../street_view';

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
    const { listing } = this.props;

    return (
      <div className='listing-preview'>
        <ListingPreviewGallery images={listing.images} />
        <section>
          <h2>${listing.rent}</h2>
          <div className='details'>
            <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
            <h4>{listing.listingType}</h4>
          </div>
          <FavoriteIconContainer id={listing.id} />
        </section>
        <description>
          {listing.description}
        </description>
        <description>
          <StreetView lat={listing.lat} lng={listing.lng} />
        </description>
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
      </div>
    );
  }
};


export default withRouter(ListingPreview);
