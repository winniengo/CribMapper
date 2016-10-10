import {
  receiveCurrentUser,
  LOGIN,
  LOGOUT,
  SIGNUP } from '../actions/session';

import { receiveErrors } from '../actions/errors';
import { login, signup, logout } from '../utils/session_api';
import { hashHistory } from 'react-router';

const sessionMiddleware = store => next => action => {
  const error = e => {
    store.dispatch(receiveErrors('session', e.responseJSON));
  }
  const success = data => {
    store.dispatch(receiveCurrentUser(data));
    hashHistory.push('/');
  }

  switch(action.type) {
    case LOGIN:
      login(action.user, success, error);
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
    default:
      return next(action);
  }
};

export default sessionMiddleware;
