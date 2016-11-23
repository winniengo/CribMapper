import { LOGOUT, RECEIVE_CURRENT_USER, OPEN_MODAL } from '../actions/session';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorites';
import merge from 'lodash/merge';

const nullSession = Object.freeze({
  currentUser: null,
  modalOpen: false,
});

const session = (state = nullSession, action) => {
  switch(action.type) {
    case LOGOUT:
      return merge({}, nullSession);
    case RECEIVE_CURRENT_USER:
      return merge({}, nullSession, {
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
    case OPEN_MODAL:
      return merge({}, state, {
        modalOpen: action.bool
      });
    default:
      return state;
  }
};

export default session;
