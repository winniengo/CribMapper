import React from 'react';

import MapContainer from './map_container';
import AboutMe from '../about_me';

const Search = ({ children, location }) => (
  <div className='app'>
    <MapContainer pathname={location.pathname}/>
    <section id='sidebar'>
      {children}
      <AboutMe />
    </section>
  </div>
);

export default Search;
