import React from 'react';

import ListingIndex from '../listings/listing_index';

class Filters extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestListings();
  }

  render() {
    const { listings } = this.props;
    return (
      <div className="filters">
        <ListingIndex listings={listings} />
      </div>
    )
  }
}

export default Filters;
