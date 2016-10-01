guest = User.create!({
    email: 'guest@email.com',
    name: 'Guest',
    password: 'password'
})

u1 = User.create!({
  email: 'sunny@gmail.com',
  name: 'Sunny',
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
