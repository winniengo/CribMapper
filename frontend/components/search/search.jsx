import React from 'react';
import { withRouter } from 'react-router';

import Map from './search_map';
import Filters from './search_filters';
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
      router,
      listings,
      favorites,
      filters,
      requestListings,
      updateBounds,
      updateRent,
      updateListingType,
      updateBedrooms,
      updateBathrooms,
      updateFee,
      updateParking,
      updatePets,
      resetFilters,
      favoriteListing,
      unfavoriteListing } = this.props;

    return (
      <div className="search">
        <Map
          listings={listings}
          requestListings={requestListings}
          updateBounds={updateBounds} />
        <div className="filters">
          <Filters
            filters={filters}
            updateRent={updateRent}
            updateListingType={updateListingType}
            updateBedrooms={updateBedrooms}
            updateBathrooms={updateBathrooms}
            updateFee={updateFee}
            updateParking={updateParking}
            updatePets={updatePets}
            resetFilters={resetFilters} />
          <ListingIndex
            listings={listings}
            favorites={favoriteListings}
            favoriteListing={favorites}
            unfavoriteListing={unfavoriteListing} />
        </div>
      </div>
    )
  }
}

export default withRouter(Search);
