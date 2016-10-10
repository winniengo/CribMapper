import { combineReducers } from 'redux';

// reducers
import listings from './listings';
import session from './session';
import filters from './filters';
import errors from './errors';

export default combineReducers({
  listings,
  session,
  filters,
  errors
});
