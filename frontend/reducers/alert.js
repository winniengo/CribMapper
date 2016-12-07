import { ADD_ALERT, CLEAR_ALERT } from '../actions/alert';

export default (state = "", action) => {
  switch(action.type) {
    case ADD_ALERT:
      return action.alert;
    case CLEAR_ALERT:
      return "";
    default:
      return state;
  }
};
