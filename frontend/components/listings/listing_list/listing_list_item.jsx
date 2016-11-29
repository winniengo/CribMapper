import React from 'react';

import ListingThumbnail from '../listing_thumbnail';
import ListingPreviewGallery from '../listing_preview_gallery';
import CommuteMap from '../commute_map';

export default ({ origin, listing, handleClick }) => {
  return (
    <li className='list-item' onClick={handleClick}>
      <ul>
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
};
