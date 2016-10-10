import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import { receiveErrors, clearErrors } from '../../actions/errors';

import SignupForm from './signup_form';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveErrors: errors => dispatch(receiveErrors('session')),
  clearErrors: () => dispatch(clearErrors('session')),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
