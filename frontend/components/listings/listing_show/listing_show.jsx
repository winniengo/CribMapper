import React from 'react';
import { withRouter } from 'react-router';

import FavoriteIconContainer from '../../favorites/favorite_icon_container';
import ListingShowDetails from './listing_show_details';
import ListingShowContact from './listing_show_contact';
import ListingShowGallery from './listing_show_gallery';
import StreetView from '../street_view';
import CommuteMap from '../commute_map';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;

    this.returnToListings = this.returnToListings.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.listing);
  }

  returnToListings() {
    this.props.deselect();
    this.props.router.push('/');
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
    const { destination } = this.props;

    const header = `$${rent} - ${bedrooms} Bed / ${bathrooms} Bath`;
    const petFriendly = cats || dogs ? "- Friendly" : "No Pets";

    return (
      <div className='listing-show'>
        <section className="listing-main">
          <button
            className='back-to-results'
            onClick={this.returnToListings}>
            ← Back to results
          </button>
          <section>
            <header>
              <h2>{header}</h2>
              <FavoriteIconContainer id={id} />
            </header>
            <h3>{address}</h3>
          </section>
          <ListingShowGallery images={images} />
          <section>
            <p className='description'>{description}</p>
            <div className='pets'>
              {cats ? <div className='background-img cats' /> : ""}
              {dogs ? <div className='background-img dogs' /> : ""}
              {petFriendly}
            </div>
          </section>
          <StreetView lat={lat} lng={lng} />
        </section>
        <section className="listing-sidebar">
          <ListingShowDetails listing={this.props.listing} />
          <CommuteMap
            origin={{ lat, lng }}
            destination={{lat: destination.lat, lng: destination.lng}} />
          <ListingShowContact contact={""}/>
        </section>
      </div>
    );
  }
}

export default withRouter(ListingShow);
