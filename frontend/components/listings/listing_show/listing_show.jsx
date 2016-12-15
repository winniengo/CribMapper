import React from 'react';

import FavoriteButtonContainer from '../../buttons/favorite_button_container';
import ListingDetails from '../listing_details';
import ListingHeader from '../listing_header';
import ListingContact from './listing_contact';
import ListingShowGallery from './listing_show_gallery';
import ListingCommute from '../listing_commute';
import StreetView from '../street_view';
import MapView from '../map_view';

import merge from 'lodash/merge';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.listing, {
      selected: 'street-view'
    });

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.listing);
  }
  
  handleClick(e) {
    this.setState({ selected: e.currentTarget.value});
  }

  renderButtons() {
    return (
      ['street-view', 'map-view'].map((view, idx) => (
        <button
          key={idx}
          type="button"
          value={view}
          onClick={this.handleClick}
          className={`hvr-underline-from-center ${this.state.selected === view ? 'selected' : ''}`}>
          <div className={`background-img icon ${view}`} />
        </button>
      ))
    );
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
    const view = this.state.selected === 'street-view' ?
      <StreetView lat={lat} lng={lng} /> :
      <MapView lat={lat} lng={lng} />;

    return (
      <div className='listing-show'>
        <section className="listing-main">
          <button
            className='navigation hvr-fade'
            onClick={() => router.push('search')}>
            ← back to search
          </button>
          <ListingHeader listing={listing} />
          <ListingShowGallery images={images} />
          <section>
            <p className='description'>{description}</p>
            <div className='pets'>
              {cats ? <div className='background-img cats' /> : ""}
              {dogs ? <div className='background-img dogs' /> : ""}
              {petFriendly}
            </div>
          </section>
          <div>
            <div className="views">
              {this.renderButtons()}
            </div>
            <section className='view'>
              {view}
            </section>
          </div>
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

          //
