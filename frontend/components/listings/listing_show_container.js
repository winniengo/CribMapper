import { connect } from 'react-redux';
// import { withRouter } from 'react-router';

import { selectListing } from '../../reducers/selectors';

import ListingShow from './listing_show';

const mapStateToProps = (state, ownProps) => {
  return {
    listing: selectListing(state, ownProps)
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingShow);
