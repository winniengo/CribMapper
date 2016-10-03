import { REQUEST_LISTINGS, receiveListings, CREATE_LISTING, receiveListing } from '../actions/listings';
import { UPDATE_BOUNDS } from '../actions/filters';
import { fetchListings, createListing } from '../utils/listings_api';

const listingsMiddleware = store => next => action => {
  const error = e => console.log(e);
  let success;

  switch(action.type) {
    case REQUEST_LISTINGS:
      success = data => store.dispatch(receiveListings(data));
      fetchListings(action.filters, success, error);
      return next(action);
    case UPDATE_BOUNDS:
      next(action);
      store.dispatch(requestListings({bounds: action.bounds}));
      break;
    case CREATE_LISTING:
      success = data => store.dispatch(receiveListing(data));
      createListing(action.listing, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default listingsMiddleware;
