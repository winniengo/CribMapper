import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allListings, allFavoriteListings } from '../../../reducers/selectors';

import ListingIndex from './listing_index';

const mapStateToProps = (state, { location }) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    listings: location.pathname.includes('search') ? allListings(state) : allFavoriteListings(state),
    path: location.pathname.includes('search') ? 'search' : 'favorites'
  });
}

export default withRouter(connect(mapStateToProps)(ListingIndex));
