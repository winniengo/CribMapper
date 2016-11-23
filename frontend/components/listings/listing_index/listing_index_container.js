import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allListings } from '../../../reducers/selectors';
import { selectListing, deselectListing, hover } from '../../../actions/listings';
import { favoriteListing, unfavoriteListing } from '../../../actions/favorites';
import { openModal } from '../../../actions/session';

import ListingIndex from './listing_index';

const mapStateToProps = (state) => {
  return ({
    listings: allListings(state),
  })
};

const mapDispatchToProps = dispatch => ({
  selectListing: listingId => dispatch(selectListing(listingId)),
  deselectListing: () => dispatch(deselectListing()),
  mouseEnter: listingId => dispatch(hover(listingId)),
  mouseOut: () => dispatch(hover(null)),
});

export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)(ListingIndex));
