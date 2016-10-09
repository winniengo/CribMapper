import {
  LOGOUT,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/session';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const session = (state = nullUser, action) => {
  switch(action.type) {
    case LOGOUT:
      return merge({}, nullUser);
    case RECEIVE_CURRENT_USER:
      return merge({}, nullUser, {
        currentUser: action.currentUser
      });
    case RECEIVE_ERRORS:
      return merge({}. nullUser, {
        errors: action.errors
      });
    case CLEAR_ERRORS:
      return merge({}, state, {
        errors: []
      });
    default:
      return state;
  }
};

export default session;
