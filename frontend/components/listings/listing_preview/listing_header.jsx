import React from 'react';

import FavoriteButtonContainer from '../../buttons/favorite_button_container';

export default ({ listing }) => (
  <section className='listing-header'>
    <ul>
      <li>
        <h2>${listing.rent}</h2><
          /li>
      <li>
        <h4>{listing.address}</h4>
      </li>
      <li>
        <FavoriteButtonContainer id={listing.id} />
      </li>
    </ul>
  </section>
);
