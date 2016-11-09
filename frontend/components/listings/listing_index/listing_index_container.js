import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allFavoriteListings, allListings } from '../../../reducers/selectors';
import { selectListing, deselectListing, hover } from '../../../actions/listings';
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
  unfavoriteListing: listingId => dispatch(unfavoriteListing(listingId)),
  selectListing: listingId => dispatch(selectListing(listingId)),
  deselectListing: () => dispatch(deselectListing()),
  mouseEnter: listingId => dispatch(hover(listingId)),
  mouseOut: () => dispatch(hover(null))
});

export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(ListingIndex));
