import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings';
import { updateBounds } from '../../actions/filters';

import SearchMap from './search_map';

const mapStateToProps = (state, ownProps)=> {
  return ({
    listings: allListings(state),
  });

}
const mapDispatchToProps = dispatch => ({
  requestListings: () => dispatch(requestListings()),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMap));
