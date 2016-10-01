import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  console.log("hello");
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);

  // for testing
  window.store = store;
});
