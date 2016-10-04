import { connect } from 'react-redux';

import ListingShow from './listing_show';

const mapStateToProps = ({ listings }) => ({
  listings
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
