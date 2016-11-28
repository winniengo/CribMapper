@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing,
      :id,
      :lat,
      :lng,
      :description,
      :address,
      :rent,
      :bedrooms,
      :bathrooms,
      :cats,
      :dogs,
      :fee,
      :parking
    json.listingType listing.listing_type
    json.images listing.images, :src
  end
end
