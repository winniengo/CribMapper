import React from 'react';
import Map from './map';
import Filters from './filters';
import ListingIndex from '../listings/listing_index';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.requestListings();
  }

  render() {
    const {
      listings,
      filters,
      requestListings,
      updateBounds,
      updateRent,
      updateListingType,
      updateBedrooms,
      updateBathrooms,
      updateFee,
      updateParking,
      updatePets
    } = this.props;

    return (
      <div className="search">
        <Map
          listings={listings}
          requestListings={requestListings}
          updateBounds={updateBounds} />
        <div className="results">
          <Filters
            filters={filters}
            updateRent={updateRent}
            updateListingType={updateListingType}
            updateBedrooms={updateBedrooms}
            updateBathrooms={updateBathrooms}
            updateFee={updateFee}
            updateParking={updateParking}
            updatePets={updatePets} />
          <ListingIndex
            listings={listings} />
        </div>
      </div>
    )
  }
}

export default Search;
