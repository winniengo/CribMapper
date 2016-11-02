import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allFavoriteListings, allListings } from '../../../reducers/selectors';
import { favoriteListing, unfavoriteListing } from '../../../actions/favorites';

import ListingIndex from './listing_index';

const mapStateToProps = (state) => {
  return ({
    favorites: allFavoriteListings(state),
    listings: allListings(state)
  })
};

const mapDispatchToProps = dispatch => ({
  favoriteListing: listingId => dispatch(favoriteListing(listingId)),
  unfavoriteListing: listingId => dispatch(unfavoriteListing(listingId))
});

export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(ListingIndex));
