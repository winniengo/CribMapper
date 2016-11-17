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
  updateFilter,
  updateBoolean,
  resetFilters } from '../../actions/filters';
import { allTags } from '../../reducers/selectors';

import Filters from './filters';

const mapStateToProps = state => ({
  filters: state.filters,
  tags: allTags(state)
});

const mapDispatchToProps = dispatch => {
  // debugger
  return ({
    updateRent: rent => dispatch(updateRent(rent)),
    updateFilter: (field, filter) => dispatch(updateFilter(field, filter)),
    resetFilters: () => dispatch(resetFilters()),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters));
