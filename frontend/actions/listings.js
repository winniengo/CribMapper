export const REQUEST_LISTINGS = "REQUEST_LISTINGS";
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
// export const CREATE_LISTING = "CREATE_LISTING";
export const REQUEST_LISTING = "REQUEST_LISTING";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REQUEST_FAVORITE_LISTINGS = "REQUEST_FAVORITE_LISTINGS";

// export const SELECT = "SELECT";
// export const HOVER = "HOVER";

export const requestFavoriteListings = userId => ({
  type: REQUEST_FAVORITE_LISTINGS,
  userId
});

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

// export const select = id => ({
//   type: SELECT,
//   id
// });
//
// export const hover = id => ({
//   type: HOVER,
//   id
// });
