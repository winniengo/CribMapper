import {
  REQUEST_LISTINGS,
  requestListings,
  receiveListings,
  CREATE_LISTING,
  receiveListing,
  REQUEST_LISTING } from '../actions/listings';
import {
  UPDATE_BOUNDS,
  UPDATE_FILTER,
  RESET_FILTER,
  RESET_FILTERS } from '../actions/filters';
import {
  fetchListings,
  createListing,
  fetchListing } from '../utils/listings_api';

const listingsMiddleware = ({ dispatch, getState }) => next => action => {
  const error = e => console.log(e);
  let success;

  switch(action.type) {
    case REQUEST_LISTINGS:
      success = listings => dispatch(receiveListings(listings));
      fetchListings(action.filters, success, error);
      return next(action);
    case REQUEST_LISTING:
      success = listing => dispatch(receiveListing(listing));
      fetchListing(action.id, success, error);
      return next(action);
    case CREATE_LISTING:
      success = listing => dispatch(receiveListing(listing));
      createListing(action.listing, success, error);
      return next(action);
    case UPDATE_BOUNDS:
    case UPDATE_FILTER:
    case RESET_FILTER:
    case RESET_FILTERS:
      next(action);
      dispatch(requestListings(getState().filters));
      break;
    default:
      return next(action);
  }
};

export default listingsMiddleware;
