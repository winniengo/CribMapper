import React from 'react';
import { withRouter } from 'react-router';

import ListingIndexItem from './listing_index_item';
import FiltersContainer from '../../filters/filters_container';

class ListingIndex extends React.Component{
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this._handleFavorite = this._handleFavorite.bind(this);
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handleMouseOut = this._handleMouseOut.bind(this)
  }

  _handleClick(listingId) {
    return e => {
      e.preventDefault();
      if (!e.target.className.includes("favorite-icon")) {
        this.props.router.push(`/search/${listingId}`);
      }
    }
  }

  _handleFavorite(action, listingId) {
    return e => {
      e.preventDefault();
      action(listingId);
    }
  }

  _handleMouseOver(listingId) {
    return () => this.props.mouseOver(listingId);
  }

  _handleMouseOut() {
    return () => this.props.mouseOut();
  }

  render() {
    const {
      listings,
      favorites,
      favoriteListing,
      unfavoriteListing } = this.props;

    return (
      <div className='listing-index'>
        <FiltersContainer />
        <ul>
        {listings.map((listing, idx) => {
          const favorited = favorites.includes(listing.id);
          let clssName =  favorited ? "favorited" : "unfavorited";
          let action = favorited ? unfavoriteListing : favoriteListing;
          return (
            <ListingIndexItem
              key={idx}
              listing={listing}
              clssName={clssName}
              handleFavorite={this._handleFavorite(action, listing.id)}
              handleClick={this._handleClick(listing.id)}
              handleMouseOver={this._handleMouseOver(listing.id)}
              handleMouseOut={this._handleMouseOut()} />
          );
        })}
        </ul>
      </div>
    );
  }
};



export default withRouter(ListingIndex);
