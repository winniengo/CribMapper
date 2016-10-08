import React from 'react';

const ListingIndexItem = ({ listing, handleClick }) => (
  <li className='listing-index-item' onClick={handleClick}>
    <h3>ListingIndexItem</h3>
    {listing.id} -  ${listing.rent} <br/>
    Bathrooms: {listing.bathrooms} <br/>
    Bedrooms: {listing.bedrooms} <br/>
    Type: {listing.listingType}
  </li>
);

export default ListingIndexItem;
