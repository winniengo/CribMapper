import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { allListings } from '../../../reducers/selectors';

import ListingIndex from './listing_index';

const mapStateToProps = state => ({
  listings: allListings(state),
})

export default withRouter(connect(mapStateToProps)(ListingIndex));
