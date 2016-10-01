import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import listingsMiddleware from './listings';

const logger = createLogger();

export default applyMiddleware(
  logger,
  listingsMiddleware
);
