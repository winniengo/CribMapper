import React from 'react';
import { withRouter } from 'react-router';

import FavoriteButtonContainer from '../../buttons/favorite_button_container';
import ListingDetails from '../listing_details';
import ListingShowContact from './listing_show_contact';
import ListingShowGallery from './listing_show_gallery';
import ListingHeader from '../listing_header';
import StreetView from '../street_view';
import ListingCommute from '../listing_commute';

import merge from 'lodash/merge';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.listing, {
      selected: 'street-view'
    });

    this.returnToListings = this.returnToListings.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.listing);
  }

  returnToListings() {
    this.props.deselect();
    this.props.router.push('/');
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
          className={this.state.selected === view ? 'selected' : ''}>
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
    const { listing, destination } = this.props;

    const petFriendly = cats || dogs ? "- Friendly" : "No Pets";
    const view = this.state.selected === 'street-view' ?
      <StreetView lat={lat} lng={lng} /> :
      <div>Map View</div>;

    return (
      <div className='listing-show'>
        <section className="listing-main">
          <button
            className='back-to-results'
            onClick={this.returnToListings}>
            ← Back to results
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
            destination={{lat: destination.lat, lng: destination.lng}} />
          <ListingShowContact contact={""}/>
        </section>
      </div>
    );
  }
}

export default withRouter(ListingShow);
