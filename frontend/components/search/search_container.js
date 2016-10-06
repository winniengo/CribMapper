import { connect } from 'react-redux';

import { allListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings';
import { updateBounds, updateRent, updateListingTypes, updateBedrooms, updateBathrooms, updatePets } from '../../actions/filters';

import Search from './search';

const mapStateToProps = state => ({
  listings: allListings(state),
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  requestListings: () => dispatch(requestListings()),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
  updateRent: rent => dispatch(updateRent(rent)),
  updateListingTypes: listingTypes => dispatch(updateListingTypes(listingTypes)),
  updateBedrooms: bedrooms => dispatch(updateBedrooms(bedrooms)),
  updateBathrooms: bathrooms => dispatch(updateBathrooms(bathrooms)),
  updatePets: pets => dispatch(updatePets(pets))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
