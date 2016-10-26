import { applyMiddleware } from 'redux';

import createLogger from 'redux-logger';
import listingsMiddleware from './listings';
import sessionMiddleware from './session';

const logger = createLogger();

export default applyMiddleware(
  listingsMiddleware,
  sessionMiddleware,
);
