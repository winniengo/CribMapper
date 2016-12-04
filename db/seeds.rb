User.destroy_all
Listing.destroy_all
Image.destroy_all
Favorite.destroy_all

guest = User.create!({
    email: 'guest',
    name: 'Guest',
    password: 'password'
})

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
Image.create!({listing_id: l8.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1450725230/1-6_le9aww.jpg'})
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

l11 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94133, USA',
  lat: 37.807017,
  lng: -122.414290,
  rent: 3200,
  bathrooms: 1,
  bedrooms: 1,
  listing_type: 'sublet',
  dogs: true,
  cats: true,
  fee: true,
  parking: true,
  description: '$3200 with parking-located in North Beach, SF. MOVE IN READY!

This furnished ONE BEDROOM-ONE BATH CONDO includes assigned secured parking remote operated. It boasts an OPEN FLOOR PLAN featuring a NEWLY REMODELED MODERN GALLEY KITCHEN with BRAND NEW STAINLESS STEEL APPLIANCES (never used) and granite counter tops.

The light filled condo is newly painted with
- double paned windows
- adjustable window blinds
- baseboard heaters
- walk in master closet
- hardwood floors
- carpeted
- washer-dryer Available.

There is ROOF DECK access with ICONIC VIEWS of COIT TOWER-GOLDEN GATE BRIDGE-SF BAY. The walk score is 97/Transit Score-89/Bike Score-82.Steps away from Wash Square Park/Library/Wharf/Pier 39. Around corner is Northpoint Centre,Trader Joes & SF finest restaurants-cafes. Small Pets allowed'
})

Image.create!({listing_id: l11.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831233/listings/11-0.jpg'})
Image.create!({listing_id: l11.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831233/listings/11-1.jpg'})
Image.create!({listing_id: l11.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831233/listings/11-2.jpg'})
Image.create!({listing_id: l11.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831233/listings/11-3.jpg'})
Image.create!({listing_id: l11.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831234/listings/11-4.jpg'})
Image.create!({listing_id: l11.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831234/listings/11-5.jpg'})
Image.create!({listing_id: l11.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831233/listings/11-6.jpg'})
Image.create!({listing_id: l11.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831233/listings/11-7.jpg'})

l12 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94111, USA',
  lat: 37.803287,
  lng: -122.404077,
  rent: 2990,
  bathrooms: 1.5,
  bedrooms: 1,
  listing_type: 'lease',
  parking: true,
  description: 'Light and spacious one-bedroom condo located between North Beach and the Embarcadero waterfront, in a beautiful and quiet cul-de-sac within walking distance to the Financial District and in close proximity to Fisherman\'s Wharf. The unit can be available furnished or unfurnished.

The unit\'s great features and amenities are as follows:
-	Large bay windows in the living room and bedroom
- Great views to the Embarcadero waterfront and Telegraph Hill
-	Hardwood floors in the living room/dining area and bedroom
-	Marble floors in the entry, kitchen and bathroom
-	Dishwasher, microwave, refrigerator and stainless steel stove appliances
-	Designated parking spot in the building\'s garage
-	24/7 aecurity at the reception
-	Fully-equipped gym with jacuzzi and sauna spa
-	Free laundry facilities on each floor
-	Storage facilities on site
-	Large community rooms with kitchen, bar and lounge areas for events
- Safeways and smaller grocery stores within walking distance
-	Water and garbage utilities are included'
  })

Image.create!({listing_id: l12.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831948/listings/12-0.jpg'})
Image.create!({listing_id: l12.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831948/listings/12-1.jpg'})
Image.create!({listing_id: l12.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831947/listings/12-4.jpg'})
Image.create!({listing_id: l12.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831948/listings/12-2.jpg'})
Image.create!({listing_id: l12.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831948/listings/12-3.jpg'})
Image.create!({listing_id: l12.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831948/listings/12-6.jpg'})
Image.create!({listing_id: l12.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831949/listings/12-7.jpg'})
Image.create!({listing_id: l12.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480831947/listings/12-5.jpg'})

l13 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94123, USA',
  lat: 37.795420,
  lng: -122.431285,
  rent: 3650,
  bathrooms: 1,
  bedrooms: 1,
  listing_type: 'lease',
  description: '** Spacious 1 Bedroom Prime Marina Cow Hollow Apartment **

Extremely convenient shopping dining and night life in immediate vicinity

Eat in kitchen

Spacious living room and bedroom

Large walk-in closets

Laundry in building

Resident manager on site

Close to public transportation

Garbage, radiator heat and water included in rent

Bicycle storage in building

Non smoking building (all new leases will be non-smoking)

Sorry no pets.'
})

Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832744/listings/13-0.jpg'})
Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832743/listings/13-1.jpg'})
Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832743/listings/13-2.jpg'})
Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832744/listings/13-3.jpg'})
Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832744/listings/13-4.jpg'})
Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832743/listings/13-5.jpg'})
Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832747/listings/13-6.jpg'})
Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832748/listings/13-7.jpg'})
Image.create!({listing_id: l13.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480832747/listings/13-8.jpg'})

l14 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94109, USA',
  lat: 37.793927,
  lng: -122.425792,
  rent: 3650,
  bathrooms: 1,
  bedrooms: 1,
  listing_type: 'lease',
  dogs: true,
  fee: true,
  parking: true,
  cats: true,
  description: 'Top-floor Victorian apartment with 1 bedroom, 1 bathroom, and an office. Parking is available. Pets are okay.

The apartment is in a 6-unit building, and is cozy and charming with lots of details and good natural light. The entry opens to a hallway, with immediate access to the bedroom and bathroom. The hallway ends at a large combination living and dining area with windows on three sides. The kitchen is integrated into the dining area, and includes a dishwasher and an in-sink disposal. The oven and range are electric, and a refrigerator and a microwave oven are also included. There is an additional small office which is accessed directly from both the living area and the hallway. There are hardwood floors and good closet space throughout, as well as a slight view of the Bay.

The location is 3 blocks away from shops and restaurants on Union Street, and 7 blocks from those on Fillmore Street. Its 4 blocks away from Polk Street, and 3 blocks away from Lafayette Park. There is easy access to all the freeways, and major transportation lines on Van Ness Avenue are 2 blocks away.

Pets are okay.
Parking is available for an additional $400 per month.
The building has an on-site common laundry facility.
The minimum lease term is 12 months.'
})

Image.create!({listing_id: l14.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833359/listings/14-0.jpg'})
Image.create!({listing_id: l14.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833358/listings/14-1.jpg'})
Image.create!({listing_id: l14.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833357/listings/14-2.jpg'})
Image.create!({listing_id: l14.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833359/listings/14-3.jpg'})
Image.create!({listing_id: l14.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833359/listings/14-4.jpg'})
Image.create!({listing_id: l14.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833357/listings/14-5.jpg'})
Image.create!({listing_id: l14.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833360/listings/14-6.jpg'})
Image.create!({listing_id: l14.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833360/listings/14-7.jpg'})

l15 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94105, USA',
  lat: 37.790156,
  lng: -122.392181,
  rent: 4700,
  bathrooms: 2,
  bedrooms: 2,
  listing_type: 'sublet',
  fee: true,
  description: 'Sophisticated Living overlooking San Francisco!

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
• Woodburning fireplaces with marble hearths (some plans).

Sorry, no pets.'
})

Image.create!({listing_id: l15.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833878/listings/15-0.jpg'})
Image.create!({listing_id: l15.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833878/listings/15-1.jpg'})
Image.create!({listing_id: l15.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833878/listings/15-2.jpg'})
Image.create!({listing_id: l15.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833877/listings/15-4.jpg'})
Image.create!({listing_id: l15.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833876/listings/15-3.jpg'})
Image.create!({listing_id: l15.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833878/listings/15-5.jpg'})
Image.create!({listing_id: l15.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480833936/listings/15-6.jpg'})

l16 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94107, USA',
  lat: 37.776352,
  lng: -122.397288,
  rent: 3000,
  bathrooms: 1.5,
  bedrooms: 1,
  listing_type: 'sublet',
  fee: true,
  dogs: true,
  description: 'Rooftop Deck, Game Lounge, BBQ Terrace, Pet Park, Fitness Center, Resident Lounge, EV Charging Stations, Stainless Steel Appliances, Soaking Tubs, USB Charging Outlets, Balconies/Decks Panoramic Views*, Guest Parking'
})

Image.create!({listing_id: l16.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834385/listings/16-0.jpg'})
Image.create!({listing_id: l16.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834384/listings/16-1.jpg'})
Image.create!({listing_id: l16.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834384/listings/16-2.jpg'})
Image.create!({listing_id: l16.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834384/listings/16-3.jpg'})
Image.create!({listing_id: l16.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834384/listings/16-4.jpg'})

l17 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94114, USA',
  lat: 37.758100,
  lng: -122.431535,
  rent: 5295,
  bathrooms: 1.5,
  bedrooms: 3,
  listing_type: 'lease',
  description: 'The Castro is a judgment-free zone where shops, restaurants and booming bars entice patrons to come out and play. Classic movie house, the Castro Theatre, is the main strip\'s neon landmark. Legendary bars like Twin Peaks and Harvey\'s anchor the area. Its quieter residential lanes make it a safe, sought-after place to call home.Picture yourself in this sunny Castro courtyard building. Shutter-framed windows bathe the roomy residence in warm light. This home brings plenty of bright idea extras to the table. Washer/dryer and dishwasher keep clean up time to a minimum, so you can get back to your balcony retreat without breaking a sweat.

  Classic property combines the best of both worlds - timeless character and contemporary comfort. Many of our units are pet-friendly, too. Iconic Charm. Modern Living.'
})

Image.create!({listing_id: l17.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834815/listings/17-0.jpg'})
Image.create!({listing_id: l17.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834814/listings/17-1.jpg'})
Image.create!({listing_id: l17.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834813/listings/17-2.jpg'})
Image.create!({listing_id: l17.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834813/listings/17-3.jpg'})
Image.create!({listing_id: l17.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480834813/listings/17-4.jpg'})

l18 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94122, USA',
  lat: 37.759865,
  lng: -122.465824,
  rent: 2695,
  bathrooms: 1,
  bedrooms: 2,
  listing_type: 'sublet',
  description: 'Ride off into the Sunset, where the surfers tame the waves, fog or shine. This Golden Gate Park adjacent neighborhood is so big, it is divided into Inner and Outer Sunset - with 9th and Irving being the commercial and dining hub of the former. Further toward the ocean, Irving turns into an area that locals call the city\'s third Chinatown. Find your place in the Sunset. You only have to look up to see how special this building is; the lobby ceiling is a mediterranean-themed masterpiece. Arched doorways, cozy alcoves and fit-for-fashionistas closet space make each apartment a work of art.'
})

Image.create!({listing_id: l18.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835242/listings/18-0.jpg'})
Image.create!({listing_id: l18.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835241/listings/18-1.jpg'})
Image.create!({listing_id: l18.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835241/listings/18-2.jpg'})
Image.create!({listing_id: l18.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835241/listings/18-4.jpg'})
Image.create!({listing_id: l18.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835243/listings/18-3.jpg'})

l19 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94121, USA',
  lat: 37.774181,
  lng: -122.496637,
  rent: 6000,
  bathrooms: 1.5,
  bedrooms: 3,
  listing_type: 'lease',
  fee: true,
  parking: true,
  description: 'Fabulously updated 3 bed, 1.5 bath top-floor flat. Beautiful wood floors highlight the elegance of this remodel. Enjoy Western vistas out the front bedroom & living room which enjoys decorative fireplace & recessed lighting. Formal dining room, also fitted with recessed lighting. Modern kitchen features stainless appliances, quartz counters, beautiful farmer\'s sink & gas stove. Appointed with all the luxuries, including stack washer & dryer in the hall, two updated bathrooms, one with a beautiful shower over tub & one enjoys the supreme commode with built-in bidet. The two main bedrooms are at the rear and look over the shared yard. Both bedrooms enjoy ample closet space with in-closet lighting. Off-street/garage parking available for fee.'
})

Image.create!({listing_id: l19.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835650/listings/19.jpg'})
Image.create!({listing_id: l19.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835647/listings/19-1.jpg'})
Image.create!({listing_id: l19.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835648/listings/19-2.jpg'})
Image.create!({listing_id: l19.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835647/listings/19-3.jpg'})
Image.create!({listing_id: l19.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835648/listings/19-4.jpg'})
Image.create!({listing_id: l19.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835648/listings/19-6.jpg'})
Image.create!({listing_id: l19.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835647/listings/19-5.jpg'})
Image.create!({listing_id: l19.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480835651/listings/19-7.jpg'})

l20 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94118, USA',
  lat: 37.789715,
  lng: -122.456983,
  rent: 8000,
  bathrooms: 3,
  bedrooms: 4,
  listing_type: 'lease',
  dogs: true,
  fee: true,
  cats: true,
  parking: true,
  description: 'Prices subject to change for different lengths of stay or times of the year. Please inquire with more details to get a quote.

Additional Property Information Below:

Utilities: 300
Tenant Pays Utilities: No
Minimum Lease: 1 months
Maximum Lease: 12 months
Deposit: 3300
Cable: No
Internet: Yes
Electricity/Gas: No
Heat: Yes
Parking: Street Parking Available, Parking Type
Furniture Alteration:
Maximum Occupants: 8
Laundry: Laundry In Unit, Laundry Type
Pets: Cat Friendly, Dog Friendly, No Pets, Pets Considered'
})

Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836536/listings/20-8.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836534/listings/20-3.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836533/listings/20-7.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836536/listings/20-10.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836536/listings/20-9.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836534/listings/20-6.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836531/listings/20-2.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836533/listings/20-1.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836537/listings/20.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836536/listings/20-11.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836535/listings/20-4.jpg'})
Image.create!({listing_id: l20.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480836536/listings/20-5.jpg'})

l21 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94117, USA',
  lat: 37.771264,
  lng: -122.446426,
  rent: 8000,
  bathrooms: 1,
  bedrooms: 5,
  listing_type: 'lease',
  dogs: true,
  cats: true,
  description: 'Full floor unit with 5 bedrooms/1 bathroom--Nicely Remodeled

Great light throughout
Brand new carpets
Bedroom #1: 1st room of Double parlor/hardwood floors/has decorative fireplace/no closet
Bedroom #2: 2nd room of Double Parlor/hardwood floors/no closet
Bedroom #3: Smallest of the bedrooms/hardwood floors/has a closet
Bedroom #4: Red wallpaper/sunny-facing out to rear yard/carpet/has a closet
Bedroom #5: Mustard colored walls/lots of natural light/carpet/has a closet
Newly remodeled kitchen with gas oven, dishwasher & microwave
1 newly remodeled bathroom with shower over tub
Pets negotiable
Bike storage included
Large backyard
Street parking only
No on-site laundry
Non smoking building'
})

Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480837648/listings/210.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480837650/listings/211.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480837650/listings/212.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480837650/listings/213.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480837651/listings/214.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480837650/listings/215.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480837652/listings/216.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480837652/listings/217.jpg'})

l21 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94115, USA',
  lat: 37.784764,
  lng: -122.442736,
  rent: 9500,
  bathrooms:
  2.5,
  bedrooms: 4,
  listing_type: 'sublet',
  dogs: true,
  fee: true,
  cats: true,
  description: 'Your home away from home! ~ We look forward to welcoming you to San Francisco! This location is in the Pacific Heights neighborhood in San Francisco.

Welcome to our Charming and Iconic Pacific Heights Victorian with Modern Upgrades and Furnishings! Tastefully Remodeled with High End Stainless Steel Appliances! Spacious Open Floor Plan! Light filled with 5 Skylights Throughout!

4bd/2.5ba (1 is a master)
*Master bedroom with Cal King bed.
*All Queen beds in bedroom
(Convertible lounge to twin bed available in bedroom 2)
(Twin air mattress available)
(Pack n play for baby available)

WALKSCORE of 97 out of 100 and also known as "Walker\'s Paradise" Walkability factor to all neighborhood conveniences such as coffee shops, parks, schools, buses, shops, restaurants, shopping.
-Walk to Union, Fillmore and Polk Street shops, cafes, & restaurants!
-10 min walk or 3 minutes driving to Whole Foods market (1/2 mile away)
-2 blocks to Blue Fog Market gourmet prepared foods and Blue Bottle coffee.'
})

Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838170/listings/220.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838170/listings/221.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838170/listings/222.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838170/listings/223.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838170/listings/224.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838173/listings/227.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838173/listings/226.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838170/listings/225.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838173/listings/228.jpg'})
Image.create!({listing_id: l21.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838173/listings/229.jpg'})

l22 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94117, USA',
  lat: 37.764479,
  lng: -122.445697,
  rent: 6650,
  bathrooms: 1,
  bedrooms: 4,
  listing_type: 'lease',
  dogs: true,
  cats: true,
  description: 'Built at the turn of the 19th century, this large and luxuriant 1900 sqft Edwardian 4 bedroom boasts hardwood floors throughout with beautifully preserved architectural period details as well as recently renovated kitchen and bathrooms.

Culinary gems await in the chef\'s kitchen with stainless steel appliances, great prep space, and high-end amenities such as pasta faucet and warming drawer.

Unlike a lot of older homes, apartment has great flow with the living room and dining room located off the kitchen.

Steps away from some of the best restaurants, grocery stores, and green spaces in the city.

Other details:
•Small pets OK
•Water and trash included
•Two car tandem on-site (flat can be rented with parking for an additional $400)
•Shared back patio for BBQ and a book in the hammock
•Drop-down projector screen in living room
•Built-in ceiling mounted speakers in dinning room and kitchen
•Monthly gardening included
•Plenty of bike parking in the garage
•Washer/dryer in flat'
})

Image.create!({listing_id: l22.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838649/listings/232.jpg'})
Image.create!({listing_id: l22.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838648/listings/231.jpg'})
Image.create!({listing_id: l22.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480838649/listings/233.jpg'})

l23 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94131, USA',
  lat: 37.735975,
  lng: -122.435740,
  rent: 4100,
  bathrooms: 2,
  bedrooms: 3,
  listing_type: 'lease',
  description: 'Nestled in San Francisco\'s beautiful Glen Park Neighborhood, this three (3) bedroom, two and a half (2.5) bathroom home features a newly remodeled two story floor plan, hardwood floors, a fireplace, a large backyard equipped with a patio, and a large two (2) car garage with additional room for storage.
The first floor opens up to the large living room with hardwood floors and a fireplace. Just off the living room is the dining room as well as the spacious kitchen. Upstairs are 3 large bedrooms with a full bathroom just off the hallway. Two (2) bedrooms have large bay windows looking out to the lovely Glen Park neighborhood with the other bedroom looking out over the large backyard. The backyard is a spacious hillside area with a large patio. The garage is a rare large two car garage with plenty of space for storage.
The house is positioned perfectly for families and everyday commuters with easy access to Highway 280 and walking distance to BART. Just a 5 minute walk will lead you to Glen Park and newly built recreation center.'
})

Image.create!({listing_id: l23.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839097/listings/240.jpg'})
Image.create!({listing_id: l23.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839097/listings/241.jpg'})
Image.create!({listing_id: l23.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839097/listings/242.jpg'})
Image.create!({listing_id: l23.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839097/listings/243.jpg'})
Image.create!({listing_id: l23.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839097/listings/244.jpg'})
Image.create!({listing_id: l23.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839097/listings/245.jpg'})
Image.create!({listing_id: l23.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839098/listings/246.jpg'})
Image.create!({listing_id: l23.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839098/listings/247.jpg'})

l24 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94107, USA',
  lat: 37.781440,
  lng: -122.402610,
  rent: 5995,
  bathrooms: 1.5,
  bedrooms: 3,
  listing_type: 'lease',
  description: 'This charming 3 bedroom, 1.5 bath urban oasis in the heart of the SoMa district offers a dynamic living experience by taking advantage of both its location on one of San Francisco\'s most quiet side streets and its beautiful, private garden, which the unit opens directly into. Rarely do rental properties in bustling and urban areas like SOMA incorporate such a desirable mix of attributes, combining the convenience of city life with private enclaves of preserved nature.'
})

Image.create!({listing_id: l24.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839681/listings/640x4809jpeg.jpg'})
Image.create!({listing_id: l24.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839681/listings/640x4808.jpg'})
Image.create!({listing_id: l24.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839679/listings/640x480_4.jpg'})
Image.create!({listing_id: l24.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839679/listings/640x480_2.jpg'})
Image.create!({listing_id: l24.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839679/listings/640x480_1.jpg'})
Image.create!({listing_id: l24.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839681/listings/640x480.jpg'})
Image.create!({listing_id: l24.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839680/listings/640x480_7.jpg'})
Image.create!({listing_id: l24.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480839679/listings/640x480_5.jpg'})

l25 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94122, USA',
  lat: 37.764479,
  lng: -122.484363,
  rent: 3695,
  bathrooms: 1.5,
  bedrooms: 3,
  listing_type: 'lease',
  parking: true,
  description: 'Bright and spacious three bedroom apartment with one and a half bathrooms in a very convenient location near UCSF-Parnassus and metro-trains to Downtown and BART. Apartment is newly remodeled and furnished. Plenty of amazing restaurant and shops all around.

Apartment is on the 2nd floor of a three story building. Unit is in the back of the building away from the street rail that runs at the front of the building.

Apartment features:
Three bedrooms each with a Queen bed and desk.
Spacious open living room with dining table area and leather sofa.
Open kitchen with stove, fridge, microwave and all basic utensils and tableware.
Large bathroom with shower, toilet and sink.
Another half bathroom with sink and toilet.
High ceilings and hardwood floors throughout.
Laundry washer and dryer in the unit.
Free WIFI included.

Convenience features:
1 block to supermarket, laundry/cleaners, and restaurants.
Metro train to Downtown and connecting to BART right in front.
10-15 minute walk to front of UCSF-Parnassus campus.
Ample street parking available within 2-3 blocks.

Indoor garage parking is an extra $100 per month to be collected in cash or check. Please check on availability.

No pets, no smokers please.'
})

Image.create!({listing_id: l25.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840210/listings/250.jpg'})
Image.create!({listing_id: l25.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840210/listings/251.jpg'})
Image.create!({listing_id: l25.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840210/listings/252.jpg'})
Image.create!({listing_id: l25.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840210/listings/253.jpg'})
Image.create!({listing_id: l25.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840210/listings/254.jpg'})
Image.create!({listing_id: l25.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840210/listings/255.jpg'})
Image.create!({listing_id: l25.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840211/listings/256.jpg'})

l26 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94118, USA',
  lat: 37.779812,
  lng: -122.455353,
  rent: 8625,
  bathrooms: 1,
  bedrooms: 3,
  listing_type: 'sublet',
  dogs: true,
  cats: true,
  description: 'With Stunning views of Sutro Tower, Twin Peaks, Cole Valley, GG Park, Buena Vista Park & Mt. Sutro Open Space Reserve, this one-of-a-kind luxurious home is a rare find! This beautiful 3 bedroom, 1 bath unit is the perfect place to stay for families or for colleagues on work trips. The home is tastefully furnished and decorated with vintage and antique artwork. A surprisingly quiet and peaceful location in the center of SF.'
})

Image.create!({listing_id: l26.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840593/listings/262.jpg'})
Image.create!({listing_id: l26.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840593/listings/263.jpg'})
Image.create!({listing_id: l26.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840594/listings/260.jpg'})
Image.create!({listing_id: l26.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840592/listings/264.jpg'})
Image.create!({listing_id: l26.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840593/listings/265.jpg'})
Image.create!({listing_id: l26.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840595/listings/266.jpg'})

l27 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94109, USA',
  lat: 37.798397,
  lng: -122.418102,
  rent: 5765,
  bathrooms: 1,
  bedrooms: 3,
  listing_type: 'lease',
  dogs: true,
  cats: true,
  description: 'Utilities: 0
Tenant Pays Utilities: No
Minimum Lease: 1 months
Maximum Lease: 10 months
Deposit: 4500
Cable: No
Internet: Yes
Electricity/Gas: No
Heat: Yes
Parking: Street Parking Available, Parking Type
Furniture Alteration: Not Permitted
Maximum Occupants: 6
Laundry: Laundry On Site, Laundry In Building, Laundry In Unit, Laundry Type
Pets: Cat Friendly, Dog Friendly, No Pets'
})

Image.create!({listing_id: l27.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480840923/listings/27.jpg'})

l28 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94121, USA',
  lat: 37.771128,
  lng: -122.428402,
  rent: 5500,
  bathrooms: 1,
  bedrooms: 2,
  listing_type: 'sublet',
  dogs: true,
  fee: true,
  cats: true,
  description: 'This is a classic San Francisco apartment building, with Bay windows, high ceilings and period wood work. The two ground floor apartments have living rooms that open on to serene planted patios with dining tables, BBQ’s and heat lamps.

All units are fully furnished with multiple flat screen TV’s, fax machines, linens and fully stocked kitchens with microwaves, cutlery, pots, pans, coffee makers, toasters and gas stoves. There is a common co-op laundry and one-car shared parking.

The property is centrally located in one of San Francisco’s best neighborhoods, near all the shopping, restaurants and cafés of Hayes Street, and convenient to the Symphony, Opera and Ballet houses. Just minutes from south freeway access, it is ideally suited for those with a Silicon Valley commute.

Unit 259 offers: Two bedrooms, one king & one queen bed, split bath with shower over tub, eat-in kitchen, patio and garden. Furnished or Unfurnished ok.'
})

Image.create!({listing_id: l28.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841452/listings/287.jpg'})
Image.create!({listing_id: l28.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841447/listings/280.jpg'})
Image.create!({listing_id: l28.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841447/listings/281.jpg'})
Image.create!({listing_id: l28.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841447/listings/282.jpg'})
Image.create!({listing_id: l28.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841448/listings/283.jpg'})
Image.create!({listing_id: l28.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841447/listings/284.jpg'})
Image.create!({listing_id: l28.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841451/listings/285.jpg'})
Image.create!({listing_id: l28.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841445/listings/286.jpg'})

l29 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94108, USA',
  lat: 37.790055,
  lng: -122.412094,
  rent: 3500,
  bathrooms: 1,
  bedrooms: 2,
  listing_type: 'lease',
  dogs: true,
  cats: true,
  description: 'Newly remodeled, amazing location near the Financial District and Downtown. Enjoy 2 bedrooms, lots of space and plenty of natural sunlight. Includes free WIFI and Netflix. Each bedroom includes a queen bed for two people. This unit sleeps a total of four people comfortably. Experience the best of urban life in San Francisco here.

Convenience features:
Walk 1 block to the Financial District and SF Downtown.
Walk 10-15 minutes to the BART Station.
Plenty of good restaurants, shops, bars all aroun'
})

Image.create!({listing_id: l29.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841910/listings/290.jpg'})
Image.create!({listing_id: l29.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841911/listings/292.jpg'})
Image.create!({listing_id: l29.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841910/listings/293.jpg'})
Image.create!({listing_id: l29.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480841911/listings/294.jpg'})

l30 = Listing.create!({
  address: Faker::Address.street_address + ', San Francisco, CA 94105, USA',
  lat: 37.789512,
  lng: -122.389520,
  rent: 3495,
  bathrooms: 2,
  bedrooms: 2,
  listing_type: 'lease',
  fee: true,
  description: 'This 2 bedroom, 2 bathroom condo offers the best value for a South Beach boutique building.'
})

Image.create!({listing_id: l30.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480842362/listings/300.jpg'})
Image.create!({listing_id: l30.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480842362/listings/301.jpg'})
Image.create!({listing_id: l30.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480842362/listings/302.jpg'})
Image.create!({listing_id: l30.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480842425/listings/305.jpg'})
Image.create!({listing_id: l30.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480842362/listings/303.jpg'})
Image.create!({listing_id: l30.id, src: 'http://res.cloudinary.com/dbgp4ftst/image/upload/v1480842363/listings/304.jpg'})
