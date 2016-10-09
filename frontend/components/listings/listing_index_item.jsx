import React from 'react';

const ListingIndexItem = ({ listing, handleClick }) => (
  <li className='listing-index-item' onClick={handleClick}>
    <img />
    <description>
      <h3>${listing.rent}</h3>
      <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
      <h4>{listing.listingType}</h4>
    </description>
  </li>
);

export default ListingIndexItem;
