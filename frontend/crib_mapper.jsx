import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import Root from './components/root';

// for testing
import { requestListings, requestListing } from './actions/listings';
import { fetchListings, createListing } from './utils/listings_api';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
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
