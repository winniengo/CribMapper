export const fetchListings = (filters, success, error) => (
  $.ajax({
    url: 'api/listings',
    method: 'GET',
    data: { filters },
    success,
    error
  })
);

export const createListing = (listing, success, error) => (
  $.ajax({
    url: 'api/listings',
    method: 'POST',
    data: { listing },
    success,
    error
  })
);

export const fetchListing = (id, success, error) => (
  $.ajax({
    url: `api/listings/${id}`,
    method: 'GET',
    success,
    error
  })
);

export const fetchFavoriteListings = (userId, success, error) => (
  $.ajax({
    url: `api/users/${userId}/favorites`,
    method: 'GET',
    success,
    error
  })
)
