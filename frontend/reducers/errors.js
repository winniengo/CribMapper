import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors';
import merge from 'lodash/merge';

const defaultErrors = {
  session: [],
  commute: []
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
