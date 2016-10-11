export const FAVORITE_LISTING = "FAVORITE_LISTING";
export const UNFAVORITE_LISTING = "UNFAVORITE_LISTING";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const favoriteListing = listingId => ({
  type: FAVORITE_LISTING,
  listingId
});

export const unfavoriteListing = listingId => ({
  type: UNFAVORITE_LISTING,
  listingId
});

export const receiveFavorite = listingId => ({
  type: RECEIVE_FAVORITE,
  listingId
});

export const removeFavorite = listingId => ({
  type: REMOVE_FAVORITE,
  listingId
});
