export const fetchListings = (filters, success, error) => (
  $.ajax({
    url: 'api/listings',
    method: 'GET',
    data: { filters },
    success,
    error
  })
)

export const createListing = (listing, success, error) => (
  $.ajax({
    url: 'api/listings',
    method: 'POST',
    data: { listing },
    success,
    error
  })
)
