import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errors';
import merge from 'lodash/merge';

const defaultErrors = {
  session: [],
}

const errors = (state = defaultErrors, action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, {
        [action.etype]: action.errors
      });
    case CLEAR_ERRORS:
      return merge({}, state, {
        [action.etype]: []
      });
    default:
      return state;
  }
};

export default errors;
