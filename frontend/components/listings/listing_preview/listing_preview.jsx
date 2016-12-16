import React from 'react';
import { withRouter } from 'react-router';

import ListingHeader from './listing_header';
import ListingGallery from '../listing_gallery';
import ListingCommute from '../listing_commute';

export default ({ listing, destination, router, path }) => (
  <div className='listing-preview'>
    <section className='sidebar-btns'>
      <button
        className='hvr-fade'
        onClick={() => router.push(path)}>
        ← back to results
      </button>
      <button
        className='hvr-fade'
        onClick={() => router.push(`listings/${listing.id}`)}>
        more details
      </button>
    </section>
    <ListingGallery images={listing.images} />
    <ListingHeader listing={listing} />
    <p>
      {listing.description}
    </p>
    <ListingCommute
      origin={{lat: listing.lat, lng: listing.lng}}
      destination={destination} />
  </div>
);
