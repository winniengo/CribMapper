import React from "react";

import FilterForm from './filter_form';
// import FilterTags from './filter_tags';

import merge from "lodash/merge";

export default ({ filters, updateFilter, resetFilters }) => (
  <div>
    <FilterForm
      filters={filters}
      updateFilter={updateFilter}
      resetFilters={resetFilters} />
  </div>
);
