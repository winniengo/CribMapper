import { combineReducers } from 'redux';

// reducers
import listings from './listings';
import session from './session';
import filters from './filters';

export default combineReducers({
  listings,
  session,
  filters
});
