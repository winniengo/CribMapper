import { connect } from 'react-redux';

import { select } from '../../../actions/listings';
import { selectListing } from '../../../reducers/selectors';
import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => {
  return {
    listing: selectListing(state, ownProps),
  };
};

const mapDispatchToProps = dispatch => ({
  deselect: () => dispatch(select(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListingShow);
