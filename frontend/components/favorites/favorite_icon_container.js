import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

import { favoriteStatus } from '../../reducers/selectors';
import { selectListing, deselectListing, hover } from '../../actions/listings';
import { favoriteListing, unfavoriteListing } from '../../actions/favorites';
import { openModal } from '../../actions/session';

// import ListingIndex from './listing_index';

import FavoriteIcon from './favorite_icon';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
    favorited: favoriteStatus(state, ownProps),
    loggedIn: Boolean(state.session.currentUser)
  })
};

const mapDispatchToProps = (dispatch, { id }) => {
  return ({
    favoriteListing: () => dispatch(favoriteListing(id)),
    unfavoriteListing: () => dispatch(unfavoriteListing(id)),
    openModal: () => dispatch(openModal(true))
  });
}

const mergeProps = ({ loggedIn, favorited }, { unfavoriteListing, favoriteListing, openModal}) => {
  let dispatchAction;
  if (loggedIn) {
    dispatchAction = favorited ? unfavoriteListing : favoriteListing;
  } else {
    dispatchAction = openModal;
  }

  return {
    className: favorited ? "favorited" : "unfavorited",
    dispatchAction,
  }
}

export default connect(
 mapStateToProps,
 mapDispatchToProps,
 mergeProps
)(FavoriteIcon);
