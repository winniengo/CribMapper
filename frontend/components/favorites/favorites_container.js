import { connect } from 'react-redux';

import { updateCurrentUser } from '../../actions/session';

import { withRouter } from 'react-router'
import Favorites from './favorites';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: user => dispatch(updateCurrentUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites));
