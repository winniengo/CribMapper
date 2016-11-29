import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allFavoriteListings } from '../../reducers/selectors';
// import { requestListings } from '../../actions/listings';
// import { updateBounds } from '../../actions/filters';

import ListingThumbnails from './listing_thumbnails';

const mapStateToProps = (state, ownProps ) => {
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
)(ListingThumbnails));
