export const allListings = ({ listings }) => (
  Object.keys(listings).map(id => listings[id])
);

const _emptyListing = {
  id: "",
  lat: "",
  lng: "",
  description: "",
  address: "",
  rent: "",
  bedrooms: "",
  bathrooms: "",
  listingType: "",
  images: [{src: '/assets/listing.jpeg'}]
};

export const selectListing = ({ listings }, { params }) => (
  listings[params.id] ? listings[params.id] : _emptyListing
);

export const allFavoriteListings = ({ session }) => (
  session.currentUser ? session.currentUser.favoriteListings : []
);

export const favoriteStatus = (state, { params }) => (
  allFavoriteListings(state).includes(parseInt(params.id))
);
