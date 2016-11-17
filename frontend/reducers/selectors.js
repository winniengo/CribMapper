export const allListings = ({ listings }) => (
  Object.keys(listings.all).map(id => listings.all[id])
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
  listings.all[params.id] ? listings.all[params.id] : _emptyListing
);

export const allFavoriteListings = ({ session }) => (
  session.currentUser ? session.currentUser.favoriteListings : []
);

export const favoriteStatus = (state, { params }) => (
  allFavoriteListings(state).includes(parseInt(params.id))
);

export const allTags = ({ filters }) => {
  let tags = [`> $${filters.rent.min}`, `< $${filters.rent.max}`];

  Object.keys(filters.bedrooms).forEach(bed => {
    if (filters.bedrooms[bed]) tags.push(`${bed} bed`)
  });

  Object.keys(filters.bathrooms).forEach(bath => {
    if (filters.bathrooms[bath]) tags.push(`${bath} bath`)
  });

  if (filters.listingType.lease) tags.push('lease');
  if (filters.listingType.sublet) tags.push('sublet');
  if (filters.pets.cats) tags.push('cats');
  if (filters.pets.dogs) tags.push('dogs');
  if (filters.advanced.noFee) tags.push('no fee');
  if (filters.advanced.parking) tags.push('parking');

  return tags;
}
