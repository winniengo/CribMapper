import { connect } from 'react-redux';
import { allFavoriteListings, favoriteStatus } from '../../../reducers/selectors';
import { favoriteListing, unfavoriteListing } from '../../../actions/favorites';

// import { withRouter } from 'react-router';

import merge from 'lodash/merge';

import { selectListing } from '../../../reducers/selectors';

import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => {
  return {
    listing: selectListing(state, ownProps),
    favorited: favoriteStatus(state, ownProps)
  };
};

const mapDispatchToProps = (dispatch, { params }) => ({
  favoriteListing: () => dispatch(favoriteListing(params.id)),
  unfavoriteListing: () => dispatch(unfavoriteListing(params.id))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const favoriteAction = stateProps.favorited ? dispatchProps.unfavoriteListing : dispatchProps.favoriteListing;

  return merge({}, stateProps, ownProps, {
    favoriteAction
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ListingShow);
