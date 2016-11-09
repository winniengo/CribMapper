import { connect } from 'react-redux';
import { allFavoriteListings, favoriteStatus } from '../../../reducers/selectors';
import { favoriteListing, unfavoriteListing } from '../../../actions/favorites';
import { select } from '../../../actions/listings';

import merge from 'lodash/merge';

import { selectListing } from '../../../reducers/selectors';
import ListingPreview from './listing_preview';

const mapStateToProps = (state, ownProps) => {
  return {
    listing: selectListing(state, ownProps),
    favorited: favoriteStatus(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, { params }) => ({
  favoriteListing: () => dispatch(favoriteListing(params.id)),
  unfavoriteListing: () => dispatch(unfavoriteListing(params.id)),
  deselect: () => dispatch(select(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingPreview);
