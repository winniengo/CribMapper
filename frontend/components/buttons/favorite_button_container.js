import { connect } from 'react-redux';

import { favoriteStatus } from '../../reducers/selectors';
import { selectListing, deselectListing, hover } from '../../actions/listings';
import { favoriteListing, unfavoriteListing } from '../../actions/favorites';
import { openModal } from '../../actions/session';

import FavoriteButton from './favorite_button';

const mapStateToProps = (state, ownProps) => {
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
  return {
    className: favorited ? "favorited" : "unfavorited",
    dispatchAction: loggedIn ? (favorited ? unfavoriteListing : favoriteListing) : openModal
  }
}

export default connect(
 mapStateToProps,
 mapDispatchToProps,
 mergeProps
)(FavoriteButton);
