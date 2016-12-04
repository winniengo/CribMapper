User.destroy_all
Listing.destroy_all
Image.destroy_all
Favorite.destroy_all

guest = User.create!({
    email: 'guest',
    name: 'Guest',
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
  listing_type: "lease",
  fee: true,
  parking: true,
  dogs: true,
  description: "Centrally located in the convenient and inspiring mix of art, culture, and vibrance of Hayes Valley. Alchemy offers a distinct sanctuary exemplified by unique and expansive living spaces, high-end amenities, and the Ground Floor Project. Carefully curated amenities including a modern and connected resident lounge, a dynamic and flexible clubhouse, a state-of-the-art fitness center, a tranquility-focused yoga studio, and much more...

Visually stunning quartz countertops in both kitchens and bathrooms.
Kitchen tile backsplashesRelaxing soaking tubs.
Stainless steel appliances with gas rangesFull sized in-unit washers & dryers.
Gorgeous wood style flooring and bedroom carpeting.
Under-mount kitchen and bathroom sinks.
Thoughtfully designed kitchens for entertaining or quick culinary creations.
Industrial strength internet that includes gigabit speed for fast TV, internet and telephone connections.",
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
  listing_type: 'lease',
  fee: true,
  parking: true,
  cats: true,
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
~ 1 year lease required"
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
  listing_type: 'sublet',
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
• Woodburning fireplaces with marble hearths (some plans)."
})

Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-0.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-1.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-2.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454142/listings/1-3.jpg'})
Image.create!({listing_id: l3.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1477454144/listings/1-4.jpg'})


l4 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94105, USA',
  lat: 37.761968,
  lng: -122.417221,
  rent: 3200.00,
  bathrooms: 1.0,
  bedrooms: 1,
  listing_type: 'sublet',
  fee: true,
  parking: true,
  dogs: true,
  cats: true,
  description: "Great vintage 1904 building in Prime Dolores Park! This spacious railroad-flat like apartment is on the first floor of an eight unit building. The apartment has a big kitchen with gas stove, dishwasher, refrigerator and granite counter top. There is space for a table and chairs and off the kitchen is a porch for extra storage. The living room, and the rest of the apartment has beautiful hardwood floors and a built in desk area. The bathroom tub and sink have just been re-glazed and look great. There is wonderful closet storage space in this apartment. Off the bedroom is a walk-in closet.

There is optional parking for one medium sized car for an additional $300. There is a wonderful shared patio in the back for relaxing and barbecuing. There is no on-site laundry but two coin operated laundrymats are at the end of the street."
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

l5 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94103, USA',
  lat: 37.776270,
  lng: -122.409965,
  rent: 4200.00,
  bathrooms: 2.0,
  bedrooms: 2,
  listing_type: 'lease',
  dogs: true,
  cats: true,
  description: "Bennett Lofts SoMa features super spacious floor plans with hardwood-style floors. Large windows set in high ceilings provide stellar views of the city, including stunning views of the Bay Bridge breaking through the morning fog. Easily explore downtown San Francisco on the brand new MUNI trolley, or go beyond the city???s borders with Caltrain, located just one block away. Wander through the multitude of local eateries and shops, or stock up on groceries at Whole Foods and Safeway. In your downtime, work on your swing at Bay Club Tennis across the street, or walk to AT&T Park to cheer on World Series Champions the San Francisco Giants!"
})

Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760490/5-00_lqzgcg.jpg'})
Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760492/5-01_dosexd.jpg'})
Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760490/5-02_nbcfrh.jpg'})
Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760490/5-03_vthbv9.jpg'})
Image.create!({listing_id: l5.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1478760490/5-04_qyne6x.jpg'})


l6 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94115, USA',
  lat: 37.793324,
  lng: -122.440805,
  rent: 5595,
  bathrooms: 2,
  bedrooms: 2,
  listing_type: 'lease',
  dogs: true,
  cats: true,
  description: "A large, three-story building that is the former Ghirardelli Mansion. It has been converted into a multi-family home. This spacious 2 bedroom, 2 bathroom unit is in an excellent, convenient location in the legendary Pacific Heights neighborhood. Nearby parks include Lafayette Square, Webster Street Historic District and Allyne Park.

--AMENITIES--

- Beautiful Spacious Apartment
- Victorian Charm
- Vaulted Ceilings
- Huge Living Room w/Wood Burning Fireplace
- Hardwood Floors
- Walk-in Closet
- Dishwasher
- Gas Stove
- Coin-op Laundry in the Building
- Water & Garbage Included w/Rent
- Just 2-blocks to Fabulous Shops & Restaurants on Union St.
- Parking Spaces May Be Available in the Next Building (Corner of Laguna & Broadway).
- Walk Score: 97; Transit Score: 92; Bike Score 59!

Pets: Up to two pet(s) allowed with an additional deposit of $500 per pet, plus pet rent of $50, per pet, per month. No Aggressive Breeds. Terms and Conditions Apply."
})

Image.create!({listing_id: l6.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450914452/12-1_wjrqq8.jpg'})
Image.create!({listing_id: l6.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450914452/12-7_yy5vqo.jpg'})
Image.create!({listing_id: l6.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450914452/12-3_odbwsl.jpg'})
Image.create!({listing_id: l6.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450914452/12-6_qanpa1.jpg'})
Image.create!({listing_id: l6.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450914452/12-5_fdb35o.jpg'})
Image.create!({listing_id: l6.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450914452/12-8_obem0i.jpg'})
Image.create!({listing_id: l6.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450914452/12-9_bxcopc.jpg'})

l7 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94110, USA',
  lat: 37.745994,
  lng: -122.419366,
  rent: 4200,
  bathrooms: 1,
  bedrooms: 3,
  listing_type: 'lease',
  dogs: false,
  cats: true,
  description: "Super easy to apply online. $35 Fee for each applicant paid via national external vendor is reusable at other apartments.

Process to lease is simple
1) View apartment
2) Apply and qualify
3) Submit one month's rent and posted deposit in cashier's check(s)
4) Move-in

This is a rent control apartment. 12 month initial term automatically goes month to month with minimal city set rent increases.

No pet dogs, up to two cats welcome. Students, international students, co-signers for students all welcome.

Please submit all requests for reasonable accommodation including service animal requests with application for owner's approval. Please consult outside source for any fair housing questions.

Broker solely represents building owner.

6 unit building, comprised of 3 upper residential units and 3 lower commercial units is designated non smoking. This is a non smoking apartment."
})

Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824859/listings/7-1.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824859/listings/7-0.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824859/listings/7-3.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824859/listings/7-4.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824859/listings/7-2.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824859/listings/7-5.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824860/listings/7-6.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824861/listings/7-7.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824861/listings/7-9.jpg'})
Image.create!({listing_id: l7.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480824861/listings/7-10.jpg'})


l8 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94110, USA',
  lat: 37.754964,
  lng: -122.412040,
  rent: 4300,
  bedrooms: 3,
  bathrooms: 1,
  listing_type: 'lease',
  dogs: false,
  cats: true,
  description: 'Sunny Top Floor Extensively Remodeled 3 Bedroom 1.5 Bath Mission District Rent Control Apartment for Lease.

Includes FREE PG&E, water and garbage
RENT CONTROL UNIT
Beautiful Hardwood Floors
Recessed Lighting
Oversize Double Pane Windows
Bernal Heights View
Huge Exclusive Outdoor Redwood Roof Deck

Common area is a combo kitchen and living area.

High-end kitchen with stainless appliances including Samsung side by side refrigerator, Samsung stainless dishwasher and new gas range with hood. Chocolate cabinets, white quartz counters, white subway tile back-splash, fancy sink faucet and disposal.

One full and one half new floor to ceiling tiled baths both with Caesar stone counters, nice vanities and sliding glass doors on the tub.

3 Bedrooms all with big windows looking towards verdant hills of Bernal Heights.

Newer building systems - tankless hot water, new plumbing to the street, electric, gas, central gas heating.

Coin Laundry on site.

Fun Mission District location near 24th Street Bart, Muni, 101 and 280, El Rio bar and much more.'
})

Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725230/1-1_zke45w.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725231/1-2_ldaunc.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725230/1-4_xoizqj.jpg'})
Image.create!({listing_id: l8.id, src: 'https://cloudinary.com/console/media_library#/dialog/image/upload/1-6_le9aww'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725230/1-3_hyn40x.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725230/1-5_p6yza0.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725232/1-8_zfj8ox.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725232/1-11_neljhe.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725232/1-9_kh2sug.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725231/1-7_lznwxi.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725232/1-10_muwmqs.jpg'})
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725232/1-12_dlm2w7.jpg'})

l9 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94121, USA',
  lat: 37.763676,
  lng: -122.397095,
  rent: 4500,
  bathrooms: 1,
  bedrooms: 3,
  listing_type: 'sublet',
  dogs: true,
  cats: false,
  description: 'Newly Renovated Spacious Three Bedroom
Brand New appliances: Refrigerator, dishwasher, oven, microwave, etc
Gas Stove, Gas Fireplace, Central Heating
L-Taraval Train Stops right out front
Easy transportation to downtown
Charming bars and restaurants within walking distance

Thanks for looking!'
})

Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825701/listings/1280x960.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825696/listings/1280x960_1.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825699/listings/1280x960_5.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825698/listings/1280x960_6.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825697/listings/1280x960_2.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825698/listings/1280x960_3.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825698/listings/1280x960_4.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825701/listings/1280x960_8.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825701/listings/1280x960_10.jpg'})
Image.create!({listing_id: l9.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480825701/listings/1280x960_9.jpg'})


l10 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94117, USA',
  lat: 37.772710,
  lng: -122.450193,
  rent: 9750,
  bathrooms: 5,
  bedrooms: 5,
  listing_type: 'lease',
  dogs: true,
  cats: true,
  fee: true,
  description: '5 bedroom Cole Valley Mansion! Priced reduced for immediate move in. - SHOWN BY APPOINTMENT
This amazing mansion has been completely remodeled and it is located in the heart of Cole Valley. It is nearby plenty of restaurants, shops, public transportation, Golden Gate Park, and UCSF.

FEATURES:
-Hardwood floors throughout
-5 en suite bedrooms
-4 full baths and 2 half baths
-Huge living room & dining room
-Built in microwave
-6 burner gas stove/oven
-Huge lower level room with wet bar
-4 stories tall
-Washer/dryer in unit

RENTAL TERMS:
- 1 year lease agreement
- renters insurance must be obtained
- tenants pays all utilities
- Small pets are allowed with additional deposit and references.'
})

Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826531/listings/10-0.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826528/listings/10-1.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826530/listings/10-2.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826530/listings/10-3.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826531/listings/10-4.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826529/listings/10-5.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826532/listings/10-6.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826532/listings/10-7.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826532/listings/10-8.jpg'})
Image.create!({listing_id: l10.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480826532/listings/10-9.jpg'})

# l10 = Listing.create!({
#   address: Faker::Address.street_address + ', San Francisco, CA 94121, USA',
#   lat: 37.772850,
#   lng: -122.509520,
#   rent: 4500,
#   bathrooms: 1,
#   bedrooms: 1,
#   description:
#   listing_type: 'sublet',
#   dogs: true,
#   cats: false,
#   description: })
#
# Image.create!({listing_id: l9.id, src: ''})
# Image.create!({listing_id: l9.id, src: ''})
# Image.create!({listing_id: l9.id, src: ''})
# Image.create!({listing_id: l9.id, src: ''})
# Image.create!({listing_id: l9.id, src: ''})
# Image.create!({listing_id: l9.id, src: ''})
# Image.create!({listing_id: l9.id, src: ''})
# Image.create!({listing_id: l9.id, src: ''})
