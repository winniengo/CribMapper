import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session';

import SignupForm from './signup_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearErrors: () => dispatch(clearErrors()),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
