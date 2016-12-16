import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING } from '../actions/listings';
import merge from 'lodash/merge';

const nullListings = {
  all: {}
};

const listings = (state = nullListings, action) => {
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return merge({}, {
        all: action.listings
      });
    case RECEIVE_LISTING:
      return merge({}, state, {
        all: {[action.listing.id]: action.listing}
      });
    default:
      return state;
  }
};

export default listings;
