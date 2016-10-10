json.set! @listing.id do
  json.partial! 'shared/listing', listing: @listing
end
