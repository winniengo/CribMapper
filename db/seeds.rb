guest = User.create!({
    email: 'guest',
    name: 'Guest',
    password: 'password'
})

u1 = User.create!({
  email: 'sunny@gmail.com',
  name: 'Sunny',
  password: 'password'
})

u2 = User.create!({
  email: 'winnie@gmail.com',
  name: 'Winnie',
  password: 'password'
})

l1 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.778104,
  lng: -122.442096,
  rent: 9000.00,
  bathrooms: 3.0,
  bedrooms: 7,
  description: Faker::Lorem.paragraph,
  listing_type: "lease",
  fee: true,
  parking: true,
  dogs: true,
})

l2 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.734989,
  lng: -122.388824,
  rent: 5750.00,
  bathrooms: 1.0,
  bedrooms: 3,
  description: Faker::Lorem.paragraph,
  listing_type: 'lease',
  fee: true,
  cats: true,
})

l3 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.787364,
  lng: -122.413031,
  rent: 2000.00,
  bathrooms: 1.0,
  bedrooms: 1,
  description: Faker::Lorem.paragraph,
  listing_type: 'sublet',
})

l4 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94110, USA',
  lat: 37.761968,
  lng: -122.417221,
  rent: 5000.00,
  bathrooms: 2,
  bedrooms: 3,
  description: Faker::Lorem.paragraph,
  listing_type: 'sublet',
  dogs: true,
  cats: true
})

f1 = Favorite.create!({user_id: guest.id, listing_id: l1.id})
f1 = Favorite.create!({user_id: guest.id, listing_id: l2.id})
f1 = Favorite.create!({user_id: u1.id, listing_id: l1.id})
f1 = Favorite.create!({user_id: u1.id, listing_id: l4.id})
f1 = Favorite.create!({user_id: u2.id, listing_id: l3.id})
