import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component{
  render() {
    return (
      <div className='listing-index'>
        <ul>
        {this.props.listings.map((listing, idx) => (
          <ListingIndexItem key={idx} listing={listing} />
        ))}
        </ul>
      </div>
    );
  }
};



export default ListingIndex;
