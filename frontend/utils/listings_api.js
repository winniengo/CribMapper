export const fetchListings = (success, error) => (
  $.ajax({
    url: 'api/listings',
    method: 'GET',
    success,
    error
  })
)

export const createListing = (listing, success, error) => (
  $.ajax({
    url: 'api/listings',
    method: 'POST',
    data: {bench},
    success,
    error
  })
)
