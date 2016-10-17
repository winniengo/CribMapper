import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  updateRent,
  updateListingType,
  updateBedrooms,
  updateBathrooms,
  updateFee,
  updateParking,
  updatePets,
  resetFilters } from '../../actions/filters';

import Filters from './filters';

const mapStateToProps = ({ filters }) => ({
  filters
});

const mapDispatchToProps = dispatch => ({

  updateRent: rent => dispatch(updateRent(rent)),
  updateListingType: listingType => dispatch(updateListingType(listingType)),
  updateBedrooms: bedrooms => dispatch(updateBedrooms(bedrooms)),
  updateBathrooms: bathrooms => dispatch(updateBathrooms(bathrooms)),
  updateFee: () => dispatch(updateFee()),
  updateParking: () => dispatch(updateParking()),
  updatePets: pets => dispatch(updatePets(pets)),
  resetFilters: () => dispatch(resetFilters()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters));
