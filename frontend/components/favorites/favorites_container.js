import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allFavoriteListings } from '../../reducers/selectors';

import Favorites from './favorites';

const mapStateToProps = state => ({
   loggedIn: Boolean(state.session.currentUser),
   listings: allFavoriteListings(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({ // TODO
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
