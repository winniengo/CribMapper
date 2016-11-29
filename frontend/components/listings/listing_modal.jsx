import React from 'react';

import ListingPreviewGallery from './listing_preview_gallery';
import ListingDetails from './listing_details';
import ListingHeader from './listing_header';

export default ({ listing }) => (
  <div className='listing-modal'>
    <ListingPreviewGallery images={listing.images} />
    <ListingHeader listing={listing} />
    <section className='description'>
      {listing.description}
    </section>
    <section className='details'>
      <ListingDetails listing={listing} />
    </section>
  </div>
);


// <section className='sidebar-buttons'>
//   <button
//     className="back-to-results"
//     onClick={this.returnToListings}>
//     ← back to results
//   </button>
//   <button
//     onClick={this.redirectToDetails}>
//     more details
//   </button>
// </section>
