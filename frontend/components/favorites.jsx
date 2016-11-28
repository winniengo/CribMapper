import React from 'react';

import ListingIndexContainer from './listings/listing_index/listing_index_container';
import AboutMe from './about_me';

const Favorites = ({ children }) => (
  <div className='app'>
    {/*<section id='sidebar'>
      <ListingIndexContainer />
      <AboutMe />
    </section>*/}
    {children}
  </div>
);

export default Favorites;
