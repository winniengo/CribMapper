import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listings';
import merge from 'lodash/merge';

const listings = (state = {}, action) => {
  console.log(action); // testing
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return merge({}, action.listings);
    case RECEIVE_LISTING:
      // debugger
      return merge({}, state, action.listing);
    default:
      return state;
  }
};

export default listings;
