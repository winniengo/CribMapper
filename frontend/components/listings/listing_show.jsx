import React from 'react';

const _emptyListing = {
  id: "",
  lat: "",
  lng: "",
  description: "",
  address: "",
  rent: "",
  bedrooms: "",
  bathrooms: "",
  listingType: ""
};

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    const listing = this.props.listings[this.props.params.id];
    this.state = listing || _emptyListing;
  }

  componentWillReceiveProps({ listings, params }) {
    const listing = listings[params.id];
    if (listing) {
      const { id, rent } = listing;
      this.setState({
        id,
        rent
      });
    }
  }

  render() {
    const { id, rent } = this.state;
    return (
      <div className='listing-show'>
        <h1>ListingShow</h1>
        {id} | ${rent}
      </div>
    );
  }
}

export default ListingShow;
