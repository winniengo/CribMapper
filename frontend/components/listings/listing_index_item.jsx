import React from 'react';

const ListingIndexItem = ({ listing }) => (
  <li className='listing-index-item'>
    {listing.id} -  ${listing.rent}
  </li>
);

export default ListingIndexItem;
