import { UPDATE_BOUNDS, UPDATE_RENT, UPDATE_LISTING_TYPES, UPDATE_BEDROOMS, UPDATE_BATHROOMS, UPDATE_PETS } from '../actions/filters';
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
    max: 5000.0
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
  },
  bathrooms: {
    "1+": false,
    "2+": false,
    "3+": false,
    "4+": false
  },
  pets: {
    dogs: false,
    cats: false
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
    case UPDATE_LISTING_TYPES:
      return merge({}, state, {
        listingTypes: action.listingTypes
      });
    case UPDATE_BEDROOMS:
      return merge({}, state, {
        bedrooms: action.bedrooms
      });
    case UPDATE_BATHROOMS:
      return merge({}, state, {
        bathrooms: action.bathrooms
      });
    case UPDATE_PETS:
      return merge({}, state, {
        pets: action.pets
      });
    default:
      return state;
  }
};

export default filters;
