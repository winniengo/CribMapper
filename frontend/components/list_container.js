import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allFavoriteListings } from '../reducers/selectors';
// import { requestListings } from '../../actions/listings';
// import { updateBounds } from '../../actions/filters';

import List from './list';

const mapStateToProps = (state, { pathname } ) => {
  return ({
    listings: allFavoriteListings(state),
  });
}

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(List));
