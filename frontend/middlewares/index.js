import { applyMiddleware } from 'redux';
import listingsMiddleware from './listings';

export default applyMiddleware(
  listingsMiddleware
);
