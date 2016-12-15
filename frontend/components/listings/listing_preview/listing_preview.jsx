import React from 'react';
import { withRouter } from 'react-router';

import FavoriteButtonContainer from '../../buttons/favorite_button_container';
import ListingGallery from '../listing_gallery';
import ListingCommute from '../listing_commute';

class ListingPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0}
  }

  render() {
    const { listing, destination, router, path } = this.props;

    return (
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
        <header>
          <h2>${listing.rent}</h2>
          <div className='details'>
            <h4>{listing.bedrooms} Bed / {listing.bathrooms} Bath</h4>
            <h4>{listing.listingType}</h4>
          </div>
          <FavoriteButtonContainer id={listing.id} />
        </header>
        <p>
          {listing.description}
        </p>

      </div>
    );
  }
};


export default withRouter(ListingPreview);

        // 
        // <ListingCommute
        //   origin={{lat: listing.lat, lng: listing.lng}}
        //   destination={{lat: destination.lat, lng: destination.lng}} />
