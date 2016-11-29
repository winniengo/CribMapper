import React from 'react';
import FavoriteButtonContainer from '../favorites/favorite_button_container';

export default ({ listing }) => {
  const { id, rent, bedrooms, bathrooms, address } = listing;

  return (
    <section className='listing-header'>
      <header>
        <h2>{`$${rent} - ${bedrooms} Bed / ${bathrooms} Bath`}</h2>
        <FavoriteButtonContainer id={id} />
      </header>
      <h3>{address}</h3>
    </section>
  );
};
