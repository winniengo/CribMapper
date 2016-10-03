import React from 'react';
import Map from './map';
import Filters from './filters';

const Search = ({ listings, requestListings, updateBounds }) => (
  <div className="search">
    <Map
      listings={listings}
      requestListings={requestListings}
      updateBounds={updateBounds} />
    <Filters
      listings={listings}
      requestListings={requestListings} />
  </div>
);

export default Search;
