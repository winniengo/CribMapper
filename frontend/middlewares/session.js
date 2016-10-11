import {
  receiveCurrentUser,
  LOGIN,
  LOGOUT,
  SIGNUP } from '../actions/session';
import { login, signup, logout } from '../utils/session_api';
import {
  FAVORITE_LISTING,
  UNFAVORITE_LISTING,
  receiveFavorite,
  removeFavorite } from '../actions/favoriteListings';
import { createFavorite, destroyFavorite } from '../utils/favorites_api';
import { receiveErrors } from '../actions/errors';

import { hashHistory } from 'react-router';

const sessionMiddleware = ({ dispatch, getState }) => next => action => {
  const error = e => {
    debugger
    dispatch(receiveErrors('session', e.responseJSON));
  }
  const currentUserSuccess = currentUser => {
    dispatch(receiveCurrentUser(currentUser));
    hashHistory.push('/');
  }

  switch(action.type) {
    case LOGIN:
      login(action.user, currentUserSuccess, error);
      return next(action);
    case LOGOUT:
      logout(() => {
        next(action);
        hashHistory.push('/');
      });
      break;
    case SIGNUP:
      signup(action.user, success, error)
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
