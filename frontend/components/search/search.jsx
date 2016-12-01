import React from 'react';

import SearchMapContainer from './search_map_container';
import AboutMe from '../about_me';

const Search = ({ children, params}) => {
  return (
    <div className='app'>
      <section className='main'>
        <SearchMapContainer selectedId={params.id} />
      </section>
      <section id='sidebar'>
        {children}
        <AboutMe />
      </section>
    </div>
  );
}

export default Search;
