import React from 'react';
import { withRouter } from 'react-router';

import ListingGallery from './listing_gallery';
import ListingDetails from './listing_details';
import ListingHeader from './listing_header';

const ListingModal = ({ listing, router }) => (
  <div className='listing-modal'>
    <div>
      <button className='navigation hvr-fade'
        onClick={() => router.push(`/listings/${listing.id}`)}>
        more details
      </button>
    </div>
    <ListingGallery images={listing.images} />
    <ListingHeader listing={listing} />
    <section className='description'>
      {listing.description}
    </section>
    <section className='details'>
      <ListingDetails listing={listing} />
    </section>
  </div>
);

export default withRouter(ListingModal);
