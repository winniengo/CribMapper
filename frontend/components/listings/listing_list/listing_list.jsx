import React from 'react';
import ListingListItem from './listing_list_item';

export default ({ listings, origin, openModal }) => {
  const handleClick = listing => e => openModal(listing);
  return (

      <ul>
        <li className='header'>
          <ul>
            <li><h3>type</h3></li>
            <li><h3>rent</h3></li>
            <li><h3>bedrooms</h3></li>
            <li><h3>bathrooms</h3></li>
            <li><h3>cats</h3></li>
            <li><h3>dogs</h3></li>
            <li><h3>broker fee</h3></li>
            <li><h3>parking</h3></li>
          </ul>
        </li>
        {listings.map((listing, idx) => (
          <ListingListItem
            key={idx}
            origin={origin}
            listing={listing}
            handleClick={handleClick(listing)} />
        ))}
      </ul>

  );
};
