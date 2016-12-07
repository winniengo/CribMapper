import React from 'react';

import FiltersContainer from './filters/filters_container';
import ListingIndexContainer from './listings/listing_index/listing_index_container';

export default ({ location }) => (
  <div>
    <FiltersContainer />
    <ListingIndexContainer location={location} />
  </div>
);
