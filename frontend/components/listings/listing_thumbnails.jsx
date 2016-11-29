import React from 'react';
import ListingThumbnail from './listing_thumbnail';

export default ({ listings, origin }) => {
  const handleClick = listing => e => console.log(listing.id);
  return (
    <ul className='listing-thumbnails'>
      {listings.map((listing, idx) => (
        <li key={idx}>
          <ListingThumbnail src={listing.images[0].src} />
          <description>
            <h3>${listing.rent}</h3>
            <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
            <h4>{listing.listingType}</h4>
          </description>
        </li>
      ))}
    </ul>
  )
}
