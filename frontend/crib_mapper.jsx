import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import Root from './components/root';

// for testing
import { requestListings, requestListing } from './actions/listings';
import { fetchListings, createListing } from './utils/listings_api';

// import Nouislider from 'react-nouislider';

// <Nouislider
//   range={{min: 0, max: 200}}
//   start={[0, 100]}
//   tooltips
//   connect
// />

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
    errors: []
  }};

  const store = configureStore(preloadedState);

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);

  // for testing
  window.store = store;
  window.error = e => console.log(e);
  window.success = data => console.log(data);
  window.requestListings = requestListings;
  window.requestListing = requestListing;
  window.fetchListings = fetchListings;
});
