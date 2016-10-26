import { LOGOUT, RECEIVE_CURRENT_USER } from '../actions/session';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites';
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
    case RECEIVE_FAVORITE:
      return merge({}, state, {
        currentUser: {
          favoriteListings: [
            ...state.currentUser.favoriteListings,
            action.listingId
          ]
        }
      });
    case REMOVE_FAVORITE:
      const nextState = merge({}, state);
      const idx = nextState.currentUser.favoriteListings.indexOf(action.listingId);
      nextState.currentUser.favoriteListings.splice(idx, 1);
      return nextState;
    default:
      return state;
  }
};

export default session;
