import React from 'react';

import SearchMapContainer from './search_map_container';
import AboutMe from '../about_me';

const Search = ({ children, params, location }) => {
  return (
    <div className='app'>
      <section className='main'>
        <SearchMapContainer selectedId={params.id} pathname={location.pathname} />
      </section>
      <section id='sidebar'>
        {children}
        <AboutMe />
      </section>
    </div>
  );
}

export default Search;
