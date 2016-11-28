import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allListings, allFavoriteListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings';
import { updateBounds } from '../../actions/filters';

import Map from './map';

const mapStateToProps = (state, { pathname } ) => {
  return ({
    listings: pathname === '/search/index' ? allListings(state) : allFavoriteListings(state),
    selected: state.listings.selected,
    hovered: state.listings.hovered
  });
}

const mapDispatchToProps = dispatch => ({
  requestListings: () => dispatch(requestListings()),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Map));
