# json.extract! user, :id, :name, :email, :favorites

# json.currentUser do
#   json.extract! user, :id, :name, :email
# end
# json.set! :favorites do
#   user.favorites.each do |favorite|
#     json.set! favorite.listing_id do
#       json.listingId favorite.listing_id
#     end
#   end
# end

json.extract! user, :id, :name, :email, :lat, :lng
json.favoriteListings user.favorite_listings.pluck(:id)
