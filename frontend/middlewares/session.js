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
import { addAlert } from '../actions/alert';

const capitalize = name => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

const sessionMiddleware = ({ dispatch, getState }) => next => action => {
  const error = e => dispatch(receiveErrors('session', e.responseJSON));

  switch(action.type) {
    case LOGIN:
      const loginSuccess = currentUser => {
        dispatch(receiveCurrentUser(currentUser));
        dispatch(addAlert(`Logged in successfully. Welcome back ${capitalize(currentUser.name)}!`));
      };

      login(action.user, loginSuccess, error);
      return next(action);
    case LOGOUT:
      const logoutSuccess = () => {
        next(action);
        dispatch(addAlert('Logged out successfully. See you soon!'));
      };

      logout(logoutSuccess);
      break;
    case SIGNUP:
      const signupSuccess = currentUser => {
        dispatch(receiveCurrentUser(currentUser));
        dispatch(addAlert(`Signed up successfully. Welcome to CribMapper ${capitalize(currentUser.name)}!`));
      };

      signup(action.user, signupSuccess, error);
      return next(action);
    case UPDATE_CURRENT_USER:
      const updateSuccess = currentUser => {
        dispatch(receiveCurrentUser(currentUser));
        dispatch(addAlert(`${capitalize(currentUser.name)} you've successfully updated your profile.`))
      };

      updateUser(action.user, updateSuccess, error);
      return next(action);
    case FAVORITE_LISTING:
      const favoriteSuccess = ({ listingId }) => dispatch(receiveFavorite(listingId));
      createFavorite(action.listingId, favoriteSuccess, error);
      return next(action);
    case UNFAVORITE_LISTING:
      const unfavoriteSuccess = ({ listingId }) => dispatch(removeFavorite(listingId));
      destroyFavorite(action.listingId, unfavoriteSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default sessionMiddleware;
