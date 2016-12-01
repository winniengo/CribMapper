import React from 'react';

import FavoriteButtonContainer from '../../buttons/favorite_button_container';
import ListingImageThumbnail from '../listing_image_thumbnail';

const ListingIndexItem = ({ listing, clssName, handleFavorite, handleClick, handleMouseEnter, handleMouseOut }) => (
  <li
    className='listing-index-item hvr-reveal'
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseOut={handleMouseOut}>
    <ListingImageThumbnail src={listing.images[0].src} />
    <description>
      <header>
        <h2>${listing.rent}</h2>
        <FavoriteButtonContainer id={listing.id} />
      </header>
      <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
      <h4>{listing.listingType}</h4>
    </description>
  </li>
);

export default ListingIndexItem;
