export const allListings = ({ listings }) => (
  Object.keys(listings).map(id => listings[id])
);

export const selectListing = ({ listings }, { params }) => listings[params.id];

export const allFavoriteListings = ({ session }) => (
  session.currentUser ? session.currentUser.favoriteListings : []
);
