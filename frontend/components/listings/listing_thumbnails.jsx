import React from 'react';
import ListingImageThumbnail from './listing_image_thumbnail';

export default ({ listings, origin, handleClick }) => (
  <ul className='listing-thumbnails'>
    {listings.map((listing, idx) => (
      <li key={idx} onClick={handleClick(listing)}>
        <ListingImageThumbnail src={listing.images[0].src} />
        <description>
          <h2>${listing.rent}</h2>
          <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
          <h4>{listing.listingType}</h4>
        </description>
      </li>
    ))}
  </ul>
);
