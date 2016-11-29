import React from 'react';

import MapContainer from './map_container';
import AboutMe from '../about_me';

const Search = ({ main, sidebar, location }) => (
  <div className='app'>
    <section className='main'>
      {main}
    </section>
    <section id='sidebar'>
      {sidebar}
      <AboutMe />
    </section>
  </div>
);

export default Search;
