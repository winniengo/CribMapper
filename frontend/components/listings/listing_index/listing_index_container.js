import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allFavoriteListings } from '../../../reducers/selectors';
import { favoriteListing, unfavoriteListing } from '../../../actions/favorites';

import ListingIndex from './listing_index';

const mapStateToProps = (state, { listings }) => ({
  favorites: allFavoriteListings(state),
  listings
});

const mapDispatchToProps = dispatch => ({
  favoriteListing: listingId => dispatch(favoriteListing(listingId)),
  unfavoriteListing: listingId => dispatch(unfavoriteListing(listingId))
});

export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(ListingIndex));
