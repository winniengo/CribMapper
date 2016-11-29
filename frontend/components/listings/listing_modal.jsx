import React from 'react';

import ListingPreviewGallery from './listing_preview_gallery';
import ListingShowDetails from './listing_show/listing_show_details';

export default ({ listing }) => (
  <div className='listing-preview'>
    <ListingPreviewGallery images={listing.images} />
    <section>
      <h2>${listing.rent}</h2>
      <div className='details'>
        <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
        <h4>{listing.listingType}</h4>
      </div>
    </section>
    <description>
      {listing.description}
    </description>
    <ListingShowDetails listing={listing} />
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
