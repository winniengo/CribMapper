import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  updateFilter,
  resetFilter,
  resetFilters } from '../../actions/filters';
// import { allTags } from '../../reducers/selectors';

import merge from 'lodash/merge'

import Filters from './filters';

const mapStateToProps = ({ filters })=> ({
  filters
});

const mapDispatchToProps = dispatch => {
  return ({
    updateFilter: (field, filter) => dispatch(updateFilter(field, filter)),
    handleResetFilter: (field, filter) => () => dispatch(resetFilter(field, filter)),
    resetFilters: () => dispatch(resetFilters()),
  });
};

// const mergeProps = (stateProps, dispatchProps) => {
//   return merge({}, stateProps, dispatchProps, {
//     tags: allTags(stateProps, dispatchProps)
//   });
// }


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters));
