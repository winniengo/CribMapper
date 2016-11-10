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

# Image.create!({listing_id: , src: ''})

l1 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.778104,
  lng: -122.442096,
  rent: 2500.00,
  bathrooms: 1.0,
  bedrooms: 1,
  description: "Centrally located in the convenient and inspiring mix of art, culture, and vibrance of Hayes Valley. Alchemy offers a distinct sanctuary exemplified by unique and expansive living spaces, high-end amenities, and the Ground Floor Project.Carefully curated amenities including a modern and connected resident lounge, a dynamic and flexible clubhouse, a state-of-the-art fitness center, a tranquility-focused yoga studio, and much more...Visually stunning quartz countertops in both kitchens and bathroomsKitchen tile backsplashesRelaxing soaking tubsStainless steel appliances with gas rangesFull sized in-unit washers & dryersGorgeous wood style flooring and bedroom carpetingUnder-mount kitchen and bathroom sinksThoughtfully designed kitchens for entertaining or quick culinary creationsIndustrial strength internet that includes gigabit speed for fast TV, internet and telephone connections.",
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

l2 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.734989,
  lng: -122.388824,
  rent: 4750.00,
  bathrooms: 1.0,
  bedrooms: 1,
  description: "Newly remodeled 1 bedroom in prime location. In close proximity to restaurants, retail, public transit, freeway access, tech bus pickups and much more.

  Features:
  ~ Updated kitchen with stainless steel appliances and carrera marble counter tops
  ~ Kitchen features refrigerator, Blue Star professional grade gas range, disposal, dishwasher
  ~ Updated bathroom with high end finishes
  ~ Hardwood floors in main living areas and carpet in bedroom
  ~ Ample closet and storage space
  ~ Small private rear facing exterior deck
  ~ On site garaged parking for 1 vehicle included with additional storage
  ~ Shared use of manicured backyard
  ~ Shared washer and dryer
  ~ 1 year lease required",
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

l3 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.787364,
  lng: -122.413031,
  rent: 6000.00,
  bathrooms: 2.0,
  bedrooms: 2,
  description: "Sophisticated Living overlooking San Francisco!

  One Pine Street has one of the most breathtaking views of the Bay Bridge and Financial District.

  Live life to the fullest with restaurants, shopping and public transportation at your door step. One Pine Street is the prime location to call home!

  Features:

  • Spectacular San Francisco Bay and Financial District views.
  • Reserved Parking available.
  • Private fitness center.
  • 24-hour concierge.
  • Washer and dryer hookups in each unit.
  • Shared laundry facility on each floor.
  • Exceptionally high ceilings.
  • Private balconies.
  • Woodburning fireplaces with marble hearths (some plans).",
  listing_type: 'sublet',
})

Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-0.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-1.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-2.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-3.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454144/listings/1-4.jpg'})
# Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454144/listings/1-6.jpg'})
# Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-5'})
# Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-7'})
# Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-8'})
# Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-9'})
# Image.create!({listing_id: l3.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/listings/1-10'})


l4 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94105, USA',
  lat: 37.761968,
  lng: -122.417221,
  rent: 3200.00,
  bathrooms: 1.0,
  bedrooms: 1,
  description: "Great vintage 1904 building in Prime Dolores Park! This spacious railroad-flat like apartment is on the first floor of an eight unit building. The apartment has a big kitchen with gas stove, dishwasher, refrigerator and granite counter top. There is space for a table and chairs and off the kitchen is a porch for extra storage. The living room, and the rest of the apartment has beautiful hardwood floors and a built in desk area. The bathroom tub and sink have just been re-glazed and look great. There is wonderful closet storage space in this apartment. Off the bedroom is a walk-in closet.

  There is optional parking for one medium sized car for an additional $300. There is a wonderful shared patio in the back for relaxing and barbecuing. There is no on-site laundry but two coin operated laundrymats are at the end of the street.",
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

# Favorite.create!({user_id: guest.id, listing_id: l1.id})
# Favorite.create!({user_id: guest.id, listing_id: l2.id})
# Favorite.create!({user_id: u1.id, listing_id: l1.id})
# Favorite.create!({user_id: u1.id, listing_id: l4.id})
# Favorite.create!({user_id: u2.id, listing_id: l3.id})

l5 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94103, USA',
  lat: 37.776270,
  lng: -122.409965,
  rent: 4200.00,
  bathrooms: 2.0,
  bedrooms: 2,
  description: "Bennett Lofts SoMa features super spacious floor plans with hardwood-style floors. Large windows set in high ceilings provide stellar views of the city, including stunning views of the Bay Bridge breaking through the morning fog. Easily explore downtown San Francisco on the brand new MUNI trolley, or go beyond the city???s borders with Caltrain, located just one block away. Wander through the multitude of local eateries and shops, or stock up on groceries at Whole Foods and Safeway. In your downtime, work on your swing at Bay Club Tennis across the street, or walk to AT&T Park to cheer on World Series Champions the San Francisco Giants!",
  listing_type: 'lease',
  dogs: true,
  cats: true
})

Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760490/5-00_lqzgcg.jpg'})
Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760492/5-01_dosexd.jpg'})
Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760490/5-02_nbcfrh.jpg'})
Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760490/5-03_vthbv9.jpg'})
Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760490/5-04_qyne6x.jpg'})
