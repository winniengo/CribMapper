import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import configureStore from './store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {session: {
    currentUser: window.currentUser ? window.currentUser : null,
    modalOpen: false
  }};
  const store = configureStore(preloadedState);

  Modal.setAppElement(document.body); // set up ReactModal

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);

  // for testing
  window.store = store;
  window.success = data => console.log(data);
  window.error = e => console.log(e);
});
