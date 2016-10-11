import {
  REQUEST_LISTINGS,
  requestListings,
  receiveListings,
  CREATE_LISTING,
  receiveListing,
  REQUEST_LISTING } from '../actions/listings';
import {
  UPDATE_BOUNDS,
  UPDATE_RENT,
  UPDATE_LISTING_TYPE,
  UPDATE_BEDROOMS,
  UPDATE_BATHROOMS,
  UPDATE_FEE,
  UPDATE_PARKING,
  UPDATE_PETS,
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
    case UPDATE_RENT:
    case UPDATE_LISTING_TYPE:
    case UPDATE_BEDROOMS:
    case UPDATE_BATHROOMS:
    case UPDATE_FEE:
    case UPDATE_PARKING:
    case UPDATE_PETS:
    case RESET_FILTERS:
      next(action);
      dispatch(requestListings(getState().filters));
      break;
    default:
      return next(action);
  }
};

export default listingsMiddleware;
