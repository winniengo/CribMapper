import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import Root from './components/root';

// for testing
import { requestListings, requestListing, selectListing, deselectListing } from './actions/listings';
import { createFavorite, destroyFavorite } from './utils/favorites_api';
import { favoriteListing, unfavoriteListing } from './actions/favorites';
import { logout } from './utils/session_api';
import { receiveErrors } from './actions/errors';

document.addEventListener('DOMContentLoaded', () => {
  // let store;
  //
  // if (window.currentUser) {
  //   const preloadedState = {session: {
  //     currentUser: window.currentUser
  //   }};
  //   store = configureStore(preloadedState);
  // } else {
  //   store = configureStore();
  // }
  const preloadedState = {session: {
    currentUser: window.currentUser ? window.currentUser : null,
  }};

  const store = configureStore(preloadedState);

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>CribMapper</h1>, rootEl);
  // ReactDOM.render(<Root store={store} />, rootEl);

  // for testing
  window.store = store;
  window.success = data => console.log(data)
  window.error = e => console.log(e)
  window.requestListings = requestListings;
  window.requestListing = requestListing;
  window.selectListing = selectListing;
  window.deselectListing = deselectListing;
  window.createFavorite = createFavorite;
  window.destroyFavorite = destroyFavorite;
  window.logout = logout;
  window.receiveErrors = receiveErrors;
  window.favoriteListing = favoriteListing;
  window.unfavoriteListing = unfavoriteListing;
});
