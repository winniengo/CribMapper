import { combineReducers } from 'redux';

// reducers
import listings from './listings';
import session from './session';

export default combineReducers({
  listings,
  session
});
