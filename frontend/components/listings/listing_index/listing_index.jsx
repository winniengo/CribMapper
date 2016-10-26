import React from 'react';
import { withRouter } from 'react-router';

import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component{
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this._handleFavorite = this._handleFavorite.bind(this);
  }

  _handleClick(listingId) {
    return e => {
      e.preventDefault();
      if (!e.target.className.includes("favorite-icon")) {
        this.props.router.push(`/listings/${listingId}`);
      }
    }
  }

  _handleFavorite(action, listingId) {
    return e => {
      e.preventDefault();
      action(listingId);
    }
  }

  render() {
    const {
      listings,
      favorites,
      favoriteListing,
      unfavoriteListing } = this.props;

    return (
      <div className='listing-index'>
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
              handleClick={this._handleClick(listing.id)} />
          );
        })}
        </ul>
      </div>
    );
  }
};



export default withRouter(ListingIndex);
