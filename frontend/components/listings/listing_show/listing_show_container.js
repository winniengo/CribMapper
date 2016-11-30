import { connect } from 'react-redux';

import { select } from '../../../actions/listings';
import { selectListing } from '../../../reducers/selectors';
import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => {
  const destination = state.session.currentUser ?
    {lat: state.session.currentUser.lat, lng: state.session.currentUser.lng} :
    {lat: null, lng: null};
  return {
    listing: selectListing(state, ownProps),
    destination
  };
};

const mapDispatchToProps = dispatch => ({
  deselect: () => dispatch(select(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListingShow);
