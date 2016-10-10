import { connect } from 'react-redux';
import { logout } from '../../actions/session';

import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    pathname: ownProps.pathname
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
