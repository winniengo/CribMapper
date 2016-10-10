# json.partial! 'api/listings/listing', collection: @listings, as: :listing

@listings.each do |listing|
  json.set! listing.id do
    json.partial! 'shared/listing', listing: listing
  end
end
