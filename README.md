# ![logo]  CripMapper | [Live](https://cribmapper.herokuapp.com/)

CribMapper is a full-stack web application inspired by popular apartment finder
site [PadMapper](https://www.padmapper.com). It is built with a:

+ Ruby on Rails backend,
+ a PostgresSQL database,
+ and a [React.js](https://facebook.github.io/react/)/[Redux](http://redux.js.org/) JavaScript frontend.

Looking for an apartment is a more often than not a total pain. Finding the
perfect apartment in your dream neighborhood within your budget is near
impossible and the process can be long, stressful and overly-complicated. To
help you find your dream apartment you've probably used Craiglist to search for
apartment listings; GoogleMaps to check out the area and calculate your
potential work commute; Yelp to scope the neighborhood; and Gmail to communicate
with landlords. Now what if all of these tools lived in one place?

CribMapper began as a clone of PadMapper. But it quickly outgrew its inspiration
in features to begin including some of the different tools I used and wish
existed in one easy-to-access one stop shop whenever I've apartment hunted.
CribMapper is driven by my goal to create the only web application users'll need
and want to use to find their perfect rentals.

## Features

### Browsing Listings

The two most important things to look for when shopping for a new apartment are
price and location. Like its inspiration, CribMapper maps apartment listings on
a Google Map for an convenient beautiful at-a-glance look at available listings.

![splash-page]

### Filtering Search Results

CribMapper offers basic filtering based on price, bedrooms, bathrooms, and location. In addition, it offers advanced filtering on pets, parking availability and broker fees.

![hlOrJL](http://i.makeagif.com/media/12-17-2016/hlOrJL.gif)

### Displaying Listings
When a user clicks on a map marker or search result, CribMapper displays a visually appealing preview of the apartment listing with a photo gallery, a summary of its amenities and an expandable view of its description.

![listing-preview]

For a more details on the listing, users can visit its show page. In addition to displaying the apartment listing with a photo gallery, a table of its amenities and a full view of its description, the show page offers street and map views of the listing.

![listing-show]

### Calculating Your Commute
Registered users can add and update their work addresses and view Google Maps' calculated estimates for their commute time and distance to work from any apartment listing.

![commute-form]

Using Google Maps Geocoding, Geolocation, Place and Directions API, CribMapper displays the route and directions for users interested in driving, taking public transit or walking to work. Users can easily visualize their morning and evening commutes when viewing any listing relieving some of the stress of planning out their workdays.

![calculating-your-commute](http://i.makeagif.com/media/12-17-2016/UB7HbQ.gif)

### Favoriting Listings

Registered users can easily save their favorite listings and revisit them.

![cEXybN](http://i.makeagif.com/media/12-17-2016/cEXybN.gif)

### Registering on CribMapper

Signing up and using the advanced features of CribMapper is simple! A button located in the navigation bar opens a modal allowing a user to:

+ create an account his/her name, email and a password,

  ![sign-up]

+ sign in to an existing account,

  ![sign-in]

+ or easily log in to a guest account.

[logo]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481929810/icons/cribmapper-logo.png
[sign-up]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481937834/screenshots/sign-up.png
[sign-in]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481937833/screenshots/sign-in.png
[splash-page]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482008240/splash-page.png
[basic-filters]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481937834/screenshots/basic-filters.png
[listing-preview]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481937833/screenshots/listing-preview.png
[listing-show]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482009831/listing-show.png
[commute-form]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482009594/commute-form.png

## Future Work

CribMapper started as a clone of a popular apartment finder site but soon
outgrew PadMapper as I began incorporating the different tools I used and wish I
had in one place whenever I'm apartment hunting. And since finding the perfect
apartment is very complicated, here are the list of addition features I'd like
to continue adding to my project to help streamline the process and make
CribMapper the one stop shop to help users find their perfect rentals.

### Saved Email Templates

Reaching out and selling yourself as the perfect tenant to brokers, landlords,
or roommates can be very challenging, not to mention tedious. User's will be
able to reuse saved email templates to save time and relieve stress.

### ![gmail] Gmail Integration

Keeping track which email threads correspond to which apartment listings can be
difficult and error-prone. Users will be able to sync their gmails to view
corresponding email threads and send responses while browsing apartment listings
on CribMapper.

### ![yelp] Yelp Integration

Easily find out what's hot in the neighborhood by viewing thumbnails of the top
restaurants, bars and shops nearby on Yelp when looking at an apartment
listing's show page.

### ![calendar] Google Calendar Integration

Users will be able to sync their google calendars to view, schedule and invite
people to apartment showing appointments. Avoid ever double-booking!

[gmail]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482005133/icons/gmail-small.png
[yelp]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482005130/icons/yelp-small.png
[calendar]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482006574/icons/calendar-small.png
