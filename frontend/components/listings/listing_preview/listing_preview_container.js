import { connect } from 'react-redux';

import { select } from '../../../actions/listings';
import { selectListing } from '../../../reducers/selectors';
import ListingPreview from './listing_preview';

const mapStateToProps = (state, ownProps) => {
  return {
    listing: selectListing(state, ownProps),
  };
};

const mapDispatchToProps = (dispatch) => ({
  deselect: () => dispatch(select(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingPreview);
