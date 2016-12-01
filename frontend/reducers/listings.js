import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING } from '../actions/listings';
import merge from 'lodash/merge';

const nullListings = {
  hovered: null,
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
    // case SELECT:
    //   return merge({}, state, {
    //     selected: action.id
    //   });
    // case HOVER:
    //   return merge({}, state, {
    //     hovered: action.id
    //   });
    default:
      return state;
  }
};

export default listings;
