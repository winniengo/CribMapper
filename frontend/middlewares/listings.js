import {
  REQUEST_LISTINGS,
  receiveListings,
  CREATE_LISTING,
  receiveListing
} from '../actions/listings';
import {
  fetchListings,
  createListing
} from '../utils/listings_api';

const listingsMiddleware = store => next => action => {
  const error = e => console.log(e);
  let success;

  switch(action.type) {
    case REQUEST_LISTINGS:
      success = data => store.dispatch(receiveListings(data));
      fetchListings(success, error);
      return next(action);
    case CREATE_LISTING:
      success = data => store.dispatch(receiveListing(data));
      createListing(action.listing, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default listingsMiddleware;
