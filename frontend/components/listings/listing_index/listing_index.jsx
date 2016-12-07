import React from 'react';

import ListingIndexItem from './listing_index_item';

export default ({ listings, path, router }) => {
  const handleClick = listingId => {
    return e => {
      if (!e.target.className.includes("favorite-icon")) {
        router.push(`/${path}/${listingId}`);
      }
    }
  }

  return (
    <div className='listing-index'>
      <ul>
      {listings.map((listing, idx) => (
        <ListingIndexItem
          key={idx}
          listing={listing}
          handleClick={handleClick(listing.id)} />
      ))}
      </ul>
    </div>
  );
};
