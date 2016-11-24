import {
  updateCurrentUser,
  receiveCurrentUser,
  UPDATE_CURRENT_USER,
  LOGIN,
  LOGOUT,
  SIGNUP } from '../actions/session';
import { login, signup, logout, updateUser } from '../utils/session_api';
import {
  FAVORITE_LISTING,
  UNFAVORITE_LISTING,
  receiveFavorite,
  removeFavorite } from '../actions/favorites';
import { createFavorite, destroyFavorite } from '../utils/favorites_api';
import { receiveErrors } from '../actions/errors';


const sessionMiddleware = ({ dispatch, getState }) => next => action => {
  const error = e => {
    dispatch(receiveErrors('session', e.responseJSON));
  }
  const currentUserSuccess = currentUser => {
    dispatch(receiveCurrentUser(currentUser));
  }

  switch(action.type) {
    case LOGIN:
      login(action.user, currentUserSuccess, error);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, currentUserSuccess, error);
      return next(action);
    case FAVORITE_LISTING:
      const favoriteSuccess = ({ listingId }) => dispatch(receiveFavorite(listingId));
      createFavorite(action.listingId, favoriteSuccess, error);
      return next(action);
    case UNFAVORITE_LISTING:
      const unfavoriteSuccess = ({ listingId }) => dispatch(removeFavorite(listingId));
      destroyFavorite(action.listingId, unfavoriteSuccess, error);
      return next(action);
    case UPDATE_CURRENT_USER:
      updateUser(action.user, currentUserSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default sessionMiddleware;
