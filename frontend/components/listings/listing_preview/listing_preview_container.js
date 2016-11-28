import { connect } from 'react-redux';

import { select } from '../../../actions/listings';
import { selectListing } from '../../../reducers/selectors';
import ListingPreview from './listing_preview';

const mapStateToProps = (state, ownProps) => {
  const { lat, lng } = state.session.currentUser;
  return {
    listing: selectListing(state, ownProps),
    destination: { lat, lng }
  };
};

const mapDispatchToProps = (dispatch) => ({
  deselect: () => dispatch(select(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingPreview);
