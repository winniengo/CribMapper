import React from 'react';

export default ({ origin, listing, handleClick }) => (
  <li className='list-item' onClick={handleClick}>
    <ul>
      <li>{listing.listingType}</li>
      <li>${listing.rent}</li>
      <li>{listing.bedrooms}</li>
      <li>{listing.bathrooms}</li>
      <li>{listing.cats ? 'yes' : 'no'}</li>
      <li>{listing.dogs ? 'yes' : 'no'}</li>
      <li>{listing.fee ? 'yes' : 'no'}</li>
      <li>{listing.parking ? 'yes' : 'no'}</li>
    </ul>
  </li>
);
