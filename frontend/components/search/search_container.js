import { connect } from 'react-redux';

import { allListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings';
import {
  updateBounds,
  updateRent,
  updateListingType,
  updateBedrooms,
  updateBathrooms,
  updateFee,
  updateParking,
  updatePets,
  resetFilters } from '../../actions/filters';

import Search from './search';

const mapStateToProps = state => ({
  listings: allListings(state),
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  requestListings: () => dispatch(requestListings()),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
  updateRent: rent => dispatch(updateRent(rent)),
  updateListingType: listingType => dispatch(updateListingType(listingType)),
  updateBedrooms: bedrooms => dispatch(updateBedrooms(bedrooms)),
  updateBathrooms: bathrooms => dispatch(updateBathrooms(bathrooms)),
  updateFee: () => dispatch(updateFee()),
  updateParking: () => dispatch(updateParking()),
  updatePets: pets => dispatch(updatePets(pets)),
  resetFilters: () => dispatch(resetFilters())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
