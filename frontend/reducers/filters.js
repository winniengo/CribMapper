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
  pets: {
    dogs: false,
    cats: false
  }
};

const filters = (state = defaultFilters, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default filters;
