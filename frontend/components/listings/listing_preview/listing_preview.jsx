import React from 'react';
import { withRouter } from 'react-router';

import ListingHeader from './listing_header';
import ListingGallery from './listing_gallery';
import ListingDescription from './listing_description';
import ListingCommute from '../listing_commute';

class ListingPreview extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {expanded: false};
  }

  render() {
    const { listing, destination, router, path } = this.props;

    return (
      <div className='listing-preview'>
        <section className='sidebar-btns'>
          <button
            className='hvr-fade'
            onClick={() => router.push(path)}>
            ← back to results
          </button>
          <button
            className='hvr-fade'
            onClick={() => router.push(`listings/${listing.id}`)}>
            more details
          </button>
        </section>
        <ListingGallery images={listing.images} />
        <ListingHeader listing={listing} />
        <ListingDescription description={listing.description} />
        <ListingCommute
          origin={{lat: listing.lat, lng: listing.lng}}
          destination={destination} />
      </div>
    )
  }
}

export default ListingPreview;
