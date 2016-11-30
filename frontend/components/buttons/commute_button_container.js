import { connect } from 'react-redux';
import { updateCurrentUser, openModal } from '../../actions/session';

import { withRouter } from 'react-router'
import CommuteButton from './commute_button';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: user => dispatch(updateCurrentUser(user)),
  openModal: () => dispatch(openModal(true))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommuteButton));
