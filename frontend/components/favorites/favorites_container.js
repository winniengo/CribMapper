import { connect } from 'react-redux';
import Favorites from './favorites';

import { withRouter } from 'react-router'

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites));
