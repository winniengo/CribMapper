import { connect } from 'react-redux';
import { logout } from '../../actions/session';

import Navbar from './navbar';

const mapStateToProps = ({ session }, { pathname }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
