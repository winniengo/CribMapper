import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
    modalOpen: false
  }};
  const store = configureStore(preloadedState);

  Modal.setAppElement(document.body);
  const rootEl = document.getElementById('root');
  // ReactDOM.render(<h1>CribMapper</h1>, rootEl);
  ReactDOM.render(<Root store={store} />, rootEl);


  const $filterTags = $('#filter-tags');
  $('#sidebar').scroll(() => {
    $('#filter-tags').css({display: $('#sidebar').scrollTop() > 295 ? "flex" : "none"});
    // $('#more-filters').css({display: $('#sidebar').scrollTop() > 295 ? "none" : ""});
  });

  // for testing
  window.store = store;
  window.success = data => console.log(data);
  window.error = e => console.log(e);
});
