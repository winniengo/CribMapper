import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allFavoriteListings } from '../../../reducers/selectors';
// import { requestListings } from '../../actions/listings';
// import { updateBounds } from '../../actions/filters';

import ListingList from './listing_list';

const mapStateToProps = (state, { pathname } ) => {
  return ({
    listings: allFavoriteListings(state),
    origin: {lat: state.session.currentUser.lat, lng: state.session.currentUser.lng}
  });
}

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingList));
