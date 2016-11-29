import React from 'react';

import FavoriteButtonContainer from '../../favorites/favorite_button_container';
import ListingThumbnail from '../listing_thumbnail';

const ListingIndexItem = ({ listing, clssName, handleFavorite, handleClick, handleMouseEnter, handleMouseOut }) => (
  <li
    className='listing-index-item'
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseOut={handleMouseOut}>
    <ListingThumbnail src={listing.images[0].src} />
    <description>
      <header>
        <h3>${listing.rent}</h3>
        <FavoriteButtonContainer id={listing.id} />
      </header>
      <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
      <h4>{listing.listingType}</h4>
    </description>
  </li>
);

export default ListingIndexItem;
