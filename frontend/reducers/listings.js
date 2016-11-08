import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  SELECT_LISTING,
  DESELECT_LISTING } from '../actions/listings';
import merge from 'lodash/merge';

const nullListings = {
  selected: null,
  all: {}
};

const listings = (state = nullListings, action) => {
  console.log(action); // testing
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return merge({}, {
        selected: state.selected,
        all: action.listings
      });
    case RECEIVE_LISTING:
      return merge({}, {
        selected: action.listing.id,
        all: {[action.listing.id]: action.listing}
      });
    case SELECT_LISTING:
      return merge({}, state, {
        selected: action.id
      });
    case DESELECT_LISTING:
      return merge({}, state, {
        selected: null
      });
    default:
      return state;
  }
};

export default listings;
