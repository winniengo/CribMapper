import { connect } from 'react-redux';
import { login } from '../../actions/session';
import { clearErrors } from '../../actions/errors';

import LoginForm from './login_form';

const mapStateToProps = ({ session, errors }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearErrors: () => dispatch(clearErrors('session')),
  login: user => dispatch(login(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
