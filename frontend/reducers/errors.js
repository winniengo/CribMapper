import { RECEIVE_ERRORS, CLEAR_ERRORS, ADD_ERRORS } from '../actions/errors';
import merge from 'lodash/merge';
import union from 'lodash/union';

const defaultErrors = {
  session: [],
  listing: [],
  favorite: []
}

const errors = (state = defaultErrors, action) => {
  let nextState;

  switch(action.type) {
    case RECEIVE_ERRORS:
      nextState = merge({}, state);
      nextState[action.etype] = action.errors;
      return nextState;
    case CLEAR_ERRORS:
      nextState = merge({}, state);
      nextState[action.etype] = [];
      return nextState;
    default:
      return state;
  }
};

export default errors;
