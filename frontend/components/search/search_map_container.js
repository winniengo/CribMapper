import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allListings, allFavoriteListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings';
import { updateBounds } from '../../actions/filters';

import SearchMap from './search_map';

const mapStateToProps = (state, { pathname })=> {
  return ({
    listings: pathname.includes('search') ? allListings(state) : allFavoriteListings(state)
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
