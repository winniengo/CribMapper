import { connect } from 'react-redux';
import { updateCurrentUser, openModal } from '../../actions/session';
import { receiveErrors, clearErrors } from '../../actions/errors';

import { withRouter } from 'react-router'
import CommuteButton from './commute_button';


const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  currentUser: session.currentUser,
  errors: errors.commute
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: user => dispatch(updateCurrentUser(user)),
  openModal: () => dispatch(openModal(true)),
  receiveErrors: errors => dispatch(receiveErrors('commute', errors)),
  clearErrors: () => dispatch(clearErrors('commute')),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CommuteButton));
