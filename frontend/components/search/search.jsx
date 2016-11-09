import React from 'react';
import MapContainer from './map_container';

const Search = ({ children }) => (
  <div className="search">
    <MapContainer />
    <section className="sidebar">
      {children}
    </section>
  </div>
);

export default Search;
