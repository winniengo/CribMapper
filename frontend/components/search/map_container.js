import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allListings, allFavoriteListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings';
import { updateBounds } from '../../actions/filters';

import Map from './map';

const mapStateToProps = (state, ownProps) => (
  ownProps.location.pathname === '/favorites/map-view' ?
  ({
    style: false,
    listings:  allFavoriteListings(state)
  }) :
  ({
    style: true,
    listings: allListings(state),
    selected: state.listings.selected,
    hovered: state.listings.hovered
  })
);
//   if (ownProps.location.pathname === '/favorites/map-view') {
//     return ({listings:  allFavoriteListings(state)});
//   } else {
//     return ({
//       listings: allListings(state),
//       selected: state.listings.selected,
//       hovered: state.listings.hovered
//     })
// }

const mapDispatchToProps = dispatch => ({
  requestListings: () => dispatch(requestListings()),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Map));
