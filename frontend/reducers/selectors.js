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

export const currentUserFavoriteListings = session => (
  session.currentUser ? session.currentUser.favoriteListings : []
);

export const favoriteStatus = ({ session }, { id }) => (
  currentUserFavoriteListings(session).includes(parseInt(id))
);

export const allFavoriteListings = ({ session, listings }) => {
  let favoriteListings = [];
  currentUserFavoriteListings(session).forEach(id => {
    if (listings.all[id]) {
      favoriteListings.push(listings.all[id]);
    }
  });
  return favoriteListings;
}

// export const allTags = ({ filters }, { handleResetFilter }) => {
//   let tags = [];
//
//   if (filters.rent.min !== 0) tags.push({tag: `> $${filters.rent.min}`, handleClick: handleResetFilter('rent', 'min')});
//   if (filters.rent.max !== 10000) tags.push({tag: `< $${filters.rent.max}`, handleClick: handleResetFilter('rent', 'max')});
//
//   // fewer lines of code but less space efficiency
//   ["bedrooms", "bathrooms"].forEach(field => {
//     Object.keys(filters[field]).forEach(filter => {
//       if (filters[field][filter]) {
//         tags.push({tag: `${filter} ${field}`, handleClick: handleResetFilter(field, filter)})
//       }
//     });
//   });
//
//   ["listingType", "pets", "advanced"].forEach(field => {
//     Object.keys(filters[field]).forEach(filter => {
//       if (filters[field][filter]) {
//         tags.push({tag: filter, handleClick: handleResetFilter(field, filter)})
//       }
//     });
//   });
//
//   return tags;
// }
