import React from 'react';
import { withRouter } from 'react-router';

import ListingShowDetails from './listing_show_details';
import ListingShowContact from './listing_show_contact';
import ListingShowGallery from './listing_show_gallery';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;

    this.returnToListings = this.returnToListings.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.listing);
  }

  returnToListings() {
    this.props.router.goBack();
  }

  handleFavorite() {
    this.props.favoriteAction();
  }

  render() {
    const {
      id,
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

    const header = `$${rent} - ${bedrooms} Bed / ${bathrooms} Bath`;
    const clssName = this.props.favorited ? "favorited" : "unfavorited";
    const petFriendly = cats || dogs ? "- Friendly" : "No Pets";

    return (
      <div className='listing-show'>
        <section className="listing-main">
          <button
            className='back-to-results'
            onClick={this.returnToListings}>
            ← Back to results
          </button>
          <header>
            <h2>{header}</h2>
            <button
              className={`favorite-icon ${clssName}`}
              onClick={this.handleFavorite} />
          </header>
          <h3>{address}</h3>
          <ListingShowGallery images={images} />
          <p className='description'>{description}</p>
          <div className='pets'>
            {cats ? <div className='cats' /> : ""}
            {dogs ? <div className='dogs' /> : ""}
            {petFriendly}
          </div>
        </section>
        <section className="listing-sidebar">
          <ListingShowDetails listing={this.state}/>
          <ListingShowContact contact={""}/>
        </section>
      </div>
    );
  }
}

export default withRouter(ListingShow);
