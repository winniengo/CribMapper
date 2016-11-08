export const REQUEST_LISTINGS = "REQUEST_LISTINGS";
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
// export const CREATE_LISTING = "CREATE_LISTING";
export const REQUEST_LISTING = "REQUEST_LISTING";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const SELECT_LISTING = "SELECT_LISTING";
export const DESELECT_LISTING = "DESELCT_LISTING";

export const requestListings = filters => ({
  type: REQUEST_LISTINGS,
  filters
});

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

// export const createListing = listing => ({
//   type: CREATE_LISTING,
//   listing
// });

export const requestListing = id => ({
  type: REQUEST_LISTING,
  id
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

export const selectListing = id => ({
  type: SELECT_LISTING,
  id
});

export const deselectListing = () => ({
  type: DESELECT_LISTING
});
