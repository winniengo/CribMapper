import { connect } from 'react-redux';
import { allListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings';
import Search from './search';
// import { updateBounds } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  listings: allListings(state)
});

const mapDispatchToProps = dispatch => ({
  requestListings: () => dispatch(requestListings()),
  updateBounds: bounds => console.log(bounds)
});

// updateBounds: bounds => dispatch(updateBounds(bounds))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
