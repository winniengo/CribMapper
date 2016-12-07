import { connect } from 'react-redux';
import { logout, openModal } from '../../actions/session';

import Navbar from './navbar';

const mapStateToProps = ({ session, alert }) => ({
  loggedIn: Boolean(session.currentUser),
  modalOpen: session.modalOpen,
  alert
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  openModal: () => dispatch(openModal(true)),
  closeModal: () => dispatch(openModal(false))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
