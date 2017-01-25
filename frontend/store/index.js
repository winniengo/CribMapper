import { createStore } from 'redux';
import reducer from '../reducers';
import middleware from '../middlewares';

const configureStore = preloadedState => (
  createStore(
    reducer,
    preloadedState,
    middleware
  )
);

export default configureStore;
