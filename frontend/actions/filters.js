export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
// export const UPDATE_RENT = "UPDATE_RENT";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const RESET_FILTER = "RESET_FILTER";
export const RESET_FILTERS = "RESET_FILTERS";

export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateFilter = (field, filter) => ({
  type: UPDATE_FILTER,
  field,
  filter
});

export const resetFilter = (field, filter) => ({
  type: RESET_FILTER,
  field,
  filter
});

export const resetFilters = () => ({
  type: RESET_FILTERS
});
