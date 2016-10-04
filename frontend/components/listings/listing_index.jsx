import React from 'react';
import { withRouter } from 'react-router';

import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component{
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(id) {
    return e => {
      e.preventDefault();
      this.props.router.push({
         pathname: `/listings/${id}`,
       });
    }
  }

  render() {
    return (
      <div className='listing-index'>
        <ul>
        {this.props.listings.map((listing, idx) => (
          <ListingIndexItem
            key={idx}
            listing={listing}
            handleClick={this._handleClick(listing.id)} />
        ))}
        </ul>
      </div>
    );
  }
};



export default withRouter(ListingIndex);
