import React from 'react';

import ListingIndexItem from './listing_index_item';

// export default ({ listings, path, router }) => {
//   const handleClick = listingId => {
//     return e => {
//       if (!e.target.className.includes("favorite-icon")) {
//         router.push(`/${path}/${listingId}`);
//       }
//     }
//   }
//
//
// };

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(listingId) {
    return e => {
      if (!e.target.className.includes("favorite-icon")) {
        this.props.router.push(`/${this.props.path}/${listingId}`);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.path === 'favorites' && !nextProps.loggedIn) {
      this.props.router.replace('/'); // redirect if logged out
    }
  }

  render() {
    const { listings } = this.props;
    return (
      <div className='listing-index'>
        <ul>
        {listings.map((listing, idx) => (
          <ListingIndexItem
            key={idx}
            listing={listing}
            handleClick={this.handleClick(listing.id)} />
        ))}
        </ul>
      </div>
    );
  }
}

export default ListingIndex;
