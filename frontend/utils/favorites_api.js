export const createFavorite = (listingId, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/favorites`,
    data: {listing_id: listingId},
    success,
    error
  });
};

export const destroyFavorite = (listingId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/favorites`,
    data: {listing_id: listingId},
    success,
    error
  });
};
