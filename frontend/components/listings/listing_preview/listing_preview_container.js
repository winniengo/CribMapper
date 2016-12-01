import { connect } from 'react-redux';

import { select } from '../../../actions/listings';
import { selectListing } from '../../../reducers/selectors';
import ListingPreview from './listing_preview';

const mapStateToProps = (state, ownProps) => {
  const destination = state.session.currentUser ?
    {lat: state.session.currentUser.lat, lng: state.session.currentUser.lng} :
    {lat: null, lng: null};

  return {
    listing: selectListing(state, ownProps),
    destination
  };
};

export default connect(mapStateToProps)(ListingPreview);
