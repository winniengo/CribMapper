import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import Root from './components/root';

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
  ReactDOM.render(<Root store={store} />, rootEl);

  // for testing
  window.store = store;
});
