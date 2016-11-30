import { applyMiddleware } from 'redux';

import createLogger from 'redux-logger';
import listingsMiddleware from './listings';
import sessionMiddleware from './session';

const logger = createLogger(); // TODO remove

export default applyMiddleware(
  listingsMiddleware,
  sessionMiddleware,
);
