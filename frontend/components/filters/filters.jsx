import React from "react";

import FilterForm from './filter_form';
import FilterTags from './filter_tags';

import merge from "lodash/merge";

const Filters = ({ filters, updateFilter, resetFilters, tags }) => {
  return (
    <div>
      <FilterTags
        tags={tags} />
      <FilterForm
        filters={filters}
        updateFilter={updateFilter}
        resetFilters={resetFilters} />
    </div>
  );
}
export default Filters;
