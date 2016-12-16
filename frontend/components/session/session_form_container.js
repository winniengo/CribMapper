import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import { login } from '../../actions/session';
import { clearErrors } from '../../actions/errors';

import SessionForm from './session_form';

const mapStateToProps = ({ session, errors }) => ({
   errors: errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearErrors: () => dispatch(clearErrors('session')),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
