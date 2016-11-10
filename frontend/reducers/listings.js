import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  SELECT,
  HOVER } from '../actions/listings';
import merge from 'lodash/merge';

const nullListings = {
  hovered: null,
  selected: null,
  all: {}
};

const listings = (state = nullListings, action) => {
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return merge({}, {
        hovered: null,
        selected: state.selected,
        all: action.listings
      });
    case RECEIVE_LISTING:
      return merge({}, state, {
        hovered: null,
        selected: action.listing.id,
        all: {[action.listing.id]: action.listing}
      });
    case SELECT:
      return merge({}, state, {
        selected: action.id
      });
    case HOVER:
      return merge({}, state, {
        hovered: action.id
      });
    default:
      return state;
  }
};

export default listings;
