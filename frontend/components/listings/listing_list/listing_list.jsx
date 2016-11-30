import React from 'react';
import ListingListItem from './listing_list_item';

export default ({ listings, origin, openModal }) => {
  const handleClick = listing => e => openModal(listing);
  return (

      <ul>
        <li className='header'>
          <ul>
            <li><h4>type</h4></li>
            <li><h4>rent</h4></li>
            <li><h4>bedrooms</h4></li>
            <li><h4>bathrooms</h4></li>
            <li><h4>cats</h4></li>
            <li><h4>dogs</h4></li>
            <li><h4>broker fee</h4></li>
            <li><h4>parking</h4></li>
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
