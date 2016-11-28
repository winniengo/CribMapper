import React from 'react';
import { withRouter } from 'react-router';

import ListingIndexItem from './listing_index_item';
import FiltersContainer from '../../filters/filters_container';

class ListingIndex extends React.Component{
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
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

  _handleMouseEnter(listingId) {
    return () => this.props.mouseEnter(listingId);
  }

  _handleMouseOut() {
    return () => this.props.mouseOut();
  }

  render() {
    return (
      <div className='listing-index'>
        <ul>
        {this.props.listings.map((listing, idx) => {
          return (
            <ListingIndexItem
              key={idx}
              listing={listing}
              handleClick={this._handleClick(listing.id)}
              handleMouseEnter={this._handleMouseEnter(listing.id)}
              handleMouseOut={this._handleMouseOut()} />
          );
        })}
        </ul>
      </div>
    );
  }
};



export default withRouter(ListingIndex);
