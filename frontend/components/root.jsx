import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';

// components
import App from './app';
import Search from './search/search';
import AboutMe from './about_me';
import Sidebar from './sidebar';
import ListingIndexContainer from './listings/listing_index/listing_index_container';
import ListingPreviewContainer from './listings/listing_preview/listing_preview_container';
import ListingShowContainer from './listings/listing_show/listing_show_container';
import FavoritesContainer from './favorites/favorites_container';
import ListingList from './listings/listing_list/listing_list';
import ListingMap from './listings/listing_map';
import ListingThumbnails from './listings/listing_thumbnails';

import { requestListing, requestFavoriteListings } from '../actions/listings';
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
    if (!store.getState().listings.all[id]) {
      store.dispatch(requestListing(id));
    }
  };

  const _ensureFavoriteListings = () => {
    const currentUser = store.getState().session.currentUser;
    store.dispatch(requestFavoriteListings(currentUser.id));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="search" />
          <Route path="search" component={Search}>
            <IndexRoute component={Sidebar} />
            <Route path=':id' component={ListingPreviewContainer} onEnter={_ensureListing} />
          </Route>
          <Route path="favorites" component={Search} onEnter={_ensureLoggedIn}>
            <IndexRoute component={ListingIndexContainer} onEnter={_ensureFavoriteListings} />
            <Route path=':id' component={ListingPreviewContainer} onEnter={_ensureListing} />
          </Route>
          <Route path="listings/:id" components={{main: ListingShowContainer, footer: AboutMe}} onEnter={_ensureListing} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
