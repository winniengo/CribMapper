import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';

// components
import App from './app';
import Search from './search/search';
import AboutMe from './about_me';
import SessionFormContainer from './session/session_form_container';
// import SignupFormContainer from './session/signup_form_container';
// import LoginFormContainer from './session/login_form_container';
import ListingIndexContainer from './listings/listing_index/listing_index_container';
import ListingShowContainer from './listings/listing_show/listing_show_container';
import ListingPreviewContainer from './listings/listing_preview/listing_preview_container';
import FavoritesContainer from './favorites/favorites_container';

import { requestListing } from '../actions/listings';
import { openModal } from '../actions/session';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
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
          <IndexRedirect to="search/index" />
          <Route path="search" component={Search} onEnter={() => console.log('/search/index')}>
            <Route path='index' component={ListingIndexContainer} />
            <Route path=':id' component={ListingPreviewContainer} onEnter={_ensureListing} />
          </Route>
          <Route path="listings/:id" components={{main: ListingShowContainer, footer: AboutMe}} onEnter={_ensureListing} />
          <Route path="favorites" component={FavoritesContainer} onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
