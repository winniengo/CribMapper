import {
  UPDATE_BOUNDS,
  UPDATE_RENT,
  UPDATE_FILTER,
  RESET_FILTERS } from '../actions/filters';

import merge from 'lodash/merge';

const defaultFilters = {
  bounds: {
    northEast: {
      lat: null,
      lng: null
    },
    southWest: {
      lat: null,
      lng: null
    }
  },
  rent: {
    min: 0,
    max: 10000
  },
  listingType: {
    lease: false,
    sublet: false,
  },
  bedrooms: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  },
  bathrooms: {
    1: false,
    2: false,
    3: false,
    4: false
  },
  pets: {
    dogs: false,
    cats: false
  },
  advanced: {
    noFee: false,
    parking: false
  }
};

const filters = (state = defaultFilters, action) => {
  switch(action.type) {
    case UPDATE_BOUNDS:
      return merge({}, state, {
        bounds: action.bounds
      });
    case UPDATE_RENT:
      return merge({}, state, {
        rent: action.rent
      });
    case UPDATE_FILTER:
      return merge({}, state, {
        [action.field]: action.filter
      });
    case RESET_FILTERS:
      return merge({}, defaultFilters, {
        bounds: state.bounds
      });
    default:
      return state;
  }
};

export default filters;
