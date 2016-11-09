import React from 'react';

const ListingIndexItem = ({ listing, clssName, handleFavorite, handleClick, handleMouseOver, handleMouseOut }) => (
  <li
    className='listing-index-item'
    onClick={handleClick}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
    <div
      className='thumbnail background-img'
      style={{backgroundImage: `url(${listing.images[0].src})`}} />
    <description>
      <header>
        <h3>${listing.rent}</h3>
        <button className={`favorite-icon ${clssName}`} onClick={handleFavorite} />
      </header>
      <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
      <h4>{listing.listingType}</h4>
    </description>
  </li>
);

export default ListingIndexItem;
