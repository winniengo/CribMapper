import React from 'react';
import Map from './map';

const Search = ({ listings, requestListings, updateBounds }) => (
  <div className="search">
    Search
    <Map
      listings={listings}
      requestListings={listings}
      updateBounds={updateBounds} />
  </div>
);

export default Search;
