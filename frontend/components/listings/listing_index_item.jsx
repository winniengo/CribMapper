import React from 'react';

const ListingIndexItem = ({ listing, handleClick }) => (
  <li className='listing-index-item' onClick={handleClick}>
    <h3>ListingIndexItem</h3>
    {listing.id} -  ${listing.rent}
  </li>
);

export default ListingIndexItem;
