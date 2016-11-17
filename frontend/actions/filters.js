export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_RENT = "UPDATE_RENT";
export const UPDATE_FILTER = "UPDATE_FILTER";
export const RESET_FILTERS = "RESET_FILTERS";

export const updateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateRent = rent => ({
  type: UPDATE_RENT,
  rent
});

export const updateFilter = (field, filter) => ({
  type: UPDATE_FILTER,
  field,
  filter
});

export const resetFilters = () => ({
  type: RESET_FILTERS
});
