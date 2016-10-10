import { LOGOUT, RECEIVE_CURRENT_USER } from '../actions/session';
import merge from 'lodash/merge';

const nullUser = Object.freeze({
  currentUser: null,
});

const session = (state = nullUser, action) => {
  switch(action.type) {
    case LOGOUT:
      return merge({}, nullUser);
    case RECEIVE_CURRENT_USER:
      return merge({}, nullUser, {
        currentUser: action.currentUser
      });
    default:
      return state;
  }
};

export default session;
