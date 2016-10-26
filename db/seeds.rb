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

# Image.create!({listing_id: , src: ''})

l1 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.778104,
  lng: -122.442096,
  rent: 2500.00,
  bathrooms: 1.0,
  bedrooms: 1,
  description: Faker::Lorem.paragraph,
  listing_type: "lease",
  fee: true,
  parking: true,
  dogs: true,
})

Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454158/listings/3-0.jpg'})
Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454155/listings/3-1.jpg'})
Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454155/listings/3-2.jpg'})
Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454155/listings/3-3.jpg'})
Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454155/listings/3-4.jpg'})
Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454159/listings/3-5.jpg'})
Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/a_90/v1477454159/listings/3-6.jpg'})
Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454160/listings/3-8.jpg'})
Image.create!({listing_id: l1.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454159/listings/3-7.jpg'})

l2 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.734989,
  lng: -122.388824,
  rent: 5750.00,
  bathrooms: 1.5,
  bedrooms: 2,
  description: Faker::Lorem.paragraph,
  listing_type: 'lease',
  fee: true,
  cats: true,
})

Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454149/listings/2-1.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454150/listings/2-3.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454150/listings/2-4.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454148/listings/2-0.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454150/listings/2-2.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454150/listings/2-6.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454150/listings/2-8.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454150/listings/2-5.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454156/listings/2-7.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454152/listings/2-9.jpg'})
Image.create!({listing_id: l2.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454157/listings/2-10.jpg'})

l3 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.787364,
  lng: -122.413031,
  rent: 6000.00,
  bathrooms: 2.0,
  bedrooms: 2,
  description: Faker::Lorem.paragraph,
  listing_type: 'sublet',
})

Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-0.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-1.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-2.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-3.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454144/listings/1-4.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454144/listings/1-6.jpg'})
Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-5'})
Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-7'})
Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-8'})
Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-9'})
Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-10'})

l4 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94110, USA',
  lat: 37.761968,
  lng: -122.417221,
  rent: 3200.00,
  bathrooms: 1.0,
  bedrooms: 1,
  description: Faker::Lorem.paragraph,
  listing_type: 'sublet',
  dogs: true,
  cats: true
})

Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454148/listings/0-7.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454147/listings/0-8.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454144/listings/0-2.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454146/listings/0-3.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454145/listings/0-4.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454146/listings/0-5.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454148/listings/0-6.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454148/listings/0-9.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454147/listings/0-0.jpg'})
Image.create!({listing_id: l4.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454143/listings/0-1.jpg'})


Favorite.create!({user_id: guest.id, listing_id: l1.id})
Favorite.create!({user_id: guest.id, listing_id: l2.id})
Favorite.create!({user_id: u1.id, listing_id: l1.id})
Favorite.create!({user_id: u1.id, listing_id: l4.id})
Favorite.create!({user_id: u2.id, listing_id: l3.id})
