import React from 'react';

const ListingIndexItem = ({ listing, clssName, handleFavorite, handleClick }) => (
  <li className='listing-index-item' onClick={handleClick}>
    <div className='container'>
      <div
        className='thumbnail'
        style={{backgroundImage: `url(${listing.images[0].src})`}} />
    </div>
    <description>
      <header>
        <h3>${listing.rent}</h3>
        <div className={`favorite-icon ${clssName}`} onClick={handleFavorite} />
      </header>
      <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
      <h4>{listing.listingType}</h4>
    </description>
  </li>
);

export default ListingIndexItem;
