# ![alt text][logo]  CripMapper | [Live](https://cribmapper.herokuapp.com/)

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

The two most important things to look for when shopping for a new apartment are
price and location. Like its inspiration, CribMapper maps apartment listings on
a Google Map for an convenient beautiful at-a-glance look at available listings.

![alt text][splash-page]

It offers basic filtering based on price, bedrooms, and
bathrooms. In addition, it offers advanced filtering on pets, parking availability and broker fees.

<!-- TODO gif of the filters -->

When a user clicks on a map marker or search result, CribMapper displays a visually appealing preview of the apartment listing with a photo gallery, a summary of the apartment's amenities and description.

![alt text][listing-preview]

Registered users can easily save their favorite listings and revisit them.

<!-- TODO gif of favoriting a listing and visiting favorites-->


Signing up and using CribMapper is simple. A `Sign In` button located in the navigation bar opens a modal allowing a user to
+ create an account his/her name, email and a password,

  ![alt text][sign-up]

+ sign in to an existing account,

  ![alt text][sign-in]
+ or easily log in to a guest account.


[logo]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481929810/icons/cribmapper-logo.png
[sign-up]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481937834/screenshots/sign-up.png
[sign-in]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481937833/screenshots/sign-in.png
[splash-page]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482008240/splash-page.png
[basic-filters]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481937834/screenshots/basic-filters.png
[listing-preview]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1481937833/screenshots/listing-preview.png

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

### ![alt text][gmail] Gmail Integration

Keeping track which email threads correspond to which apartment listings can be
difficult and error-prone. Users will be able to sync their gmails to view
corresponding email threads and send responses while browsing apartment listings
on CribMapper.

### ![alt text][yelp] Yelp Integration

Easily find out what's hot in the neighborhood by viewing thumbnails of the top
restaurants, bars and shops nearby on Yelp when looking at an apartment
listing's show page.

### ![alt text][calendar] Google Calendar Integration

Users will be able to sync their google calendars to view, schedule and invite
people to apartment showing appointments. Avoid ever double-booking!

[gmail]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482005133/icons/gmail-small.png
[yelp]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482005130/icons/yelp-small.png
[calendar]:http://res.cloudinary.com/dbgp4ftst/image/upload/v1482006574/icons/calendar-small.png
