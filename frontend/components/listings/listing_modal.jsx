import React from 'react';

import ListingGallery from './listing_gallery';
import ListingDetails from './listing_details';
import ListingHeader from './listing_header';

export default ({ listing }) => (
  <div className='listing-modal'>
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
