import React from 'react';

import FavoriteButtonContainer from '../../buttons/favorite_button_container';

export default ({ listing }) => (
  <section className='listing-header'>
    <header>
      <h2>${listing.rent}</h2>
      <div className='details'>
        <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
        <h4>{listing.listingType}</h4>
      </div>
      <FavoriteButtonContainer id={listing.id} />
    </header>
  </section>
);
