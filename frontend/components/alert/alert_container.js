import { connect } from 'react-redux';
import { clearAlert} from '../../actions/alert';
import Alert from './alert';

const mapStateToProps = ({ alert }) => ({
  alert
});

const mapDispatchToProps = dispatch => ({
  clearAlert: () => dispatch(clearAlert())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
