export const fetchFavorites = (userId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/favorites`,
    success,
    error
  });
};

export const createFavorite = (userId, listingId, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/favorites`,
    data: {userId, listingId},
    success,
    error
  });
};

export const destroyFavorite = (userId, listingId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/favorites`,
    data: {userId, listingId},
    success,
    error
  });
};
