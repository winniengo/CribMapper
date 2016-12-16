import React from 'react';

import ListingDetails from './listing_details';
import ListingHeader from './listing_header';
import ListingContact from './listing_contact';
import ListingGallery from './listing_gallery';
import ListingCommute from '../listing_commute';
import StreetView from '../street_view';
import MapView from '../map_view';
import Tabs from '../../tabs';

import merge from 'lodash/merge';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.listing);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.listing);
  }

  render() {
    const {
      id,
      lat,
      lng,
      description,
      address,
      rent,
      bedrooms,
      bathrooms,
      cats,
      dogs,
      fee,
      parking,
      listingType,
      images } = this.state;
    const { listing, destination, router } = this.props;

    const petFriendly = cats || dogs ? "- Friendly" : "No Pets";

    return (
      <div className='listing-show'>
        <section className="listing-main">
          <button
            className='navigation hvr-fade'
            onClick={() => router.push('search')}>
            ← back to search
          </button>
          <ListingHeader listing={listing} />
          <ListingGallery images={images} />
          <section>
            <p className='description'>{description}</p>
            <div className='pets'>
              {cats ? <div className='background-img cats' /> : ""}
              {dogs ? <div className='background-img dogs' /> : ""}
              {petFriendly}
            </div>
          </section>
          <Tabs tabs={['street-view', 'map-view']} views={[<StreetView lat={lat} lng={lng} />,   <MapView lat={lat} lng={lng} />]}/>
        </section>
        <section className="listing-sidebar">
          <ListingDetails listing={listing} />
          <ListingCommute
            origin={{ lat, lng }}
            destination={destination} />
          <ListingContact contact={""}/>
        </section>
      </div>
    );
  }
}

export default ListingShow;
