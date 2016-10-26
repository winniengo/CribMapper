import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// components
import App from './app';
import SearchContainer from './search/search_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import ListingShowContainer from './listings/listing_show/listing_show_container';

import { requestListing } from '../actions/listings';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace ('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureListing = nextState => {
    const id = nextState.params.id;
    if (!store.getState().listings[id]) {
      store.dispatch(requestListing(id));
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SearchContainer} />
          <Route path='/signup' component={SignupFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path='/login' component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/listings/:id" component={ListingShowContainer} onEnter={_ensureListing} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
