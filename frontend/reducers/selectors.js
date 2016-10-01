export const allListings = listings => (
  Object.keys(listings).map(id => listings[id])
);
