import { connect } from 'react-redux';
import { logout, openModal } from '../../actions/session';

import Navbar from './navbar';

const mapStateToProps = ({ session }, { pathname }) => {
  return {
    loggedIn: Boolean(session.currentUser),
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  openModal: () => dispatch(openModal(true))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
