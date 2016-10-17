import React from 'react';
import { withRouter } from 'react-router';

import Map from './search_map';
import FiltersContainer from '../filters/filters_container';
import ListingIndexContainer from '../listings/listing_index_container';

const Search = ({ listings, requestListings, updateBounds }) => (
  <div className="search">
    <Map
      listings={listings}
      requestListings={requestListings}
      updateBounds={updateBounds} />
    <section className="filters">
      <FiltersContainer />
      <ListingIndexContainer listings={listings} />
    </section>
  </div>
);

export default Search;
