import React from 'react';
import merge from 'lodash/merge';

import ListingIndex from '../listings/listing_index';

class Filters extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.filters;

    this.handleClick = this.handleClick.bind(this);
    this.renderCheckboxes = this.renderCheckboxes.bind(this);
  }

  handleRentChange(field) {
    return e => {
      this.setState({rent: {
        [field]: e.currentTarget.value
      }});
      // this.props.updateRent(this.state.rent);
    }
  }

  handleClick(filter) {
    return field => e => {
      const nextState = merge({}, this.state[filter], {
        [field]: !this.state[filter][field]
      });
      this.setState({[filter]: nextState});
    }
  }

  renderCheckboxes(filter, handler) {
    return (
      Object.keys(filter).map(option => (
        <label className='filters-form-field'>
          {option}
          <input
            type='checkbox'
            checked={filter[option] ? "checked" : ""}
            onClick={handler(option)} />
        </label>
      ))
    )
  }

  render() {
    // const { listings } = this.props;
    const { rent, listingTypes, bedrooms, bathrooms, pets } = this.state;
    console.log(this.state);
    return (
      <div className="filters-form">
        <form>
          <h3>Rent</h3>
          <label className='filters-form-field'>
            Min
            <input
              type='number'
              value={rent.min}
              onChange={this.handleRentChange('min')} />
          </label>
          <label className='filters-form-field'>
            Max
            <input
              type='number'
              value={rent.max}
              onChange={this.handleRentChange('max')} />
          </label>
          <h3>Listing Type</h3>
          {this.renderCheckboxes(listingTypes, this.handleClick("listingTypes"))}
          <h3>Bedrooms</h3>
          {this.renderCheckboxes(bedrooms, this.handleClick("bedrooms"))}
          <h3>Bathrooms</h3>
          {this.renderCheckboxes(bathrooms, this.handleClick("bathrooms"))}
          <h3>Pets</h3>
          {this.renderCheckboxes(pets, this.handleClick("pets"))}
        </form>
      </div>
    )
  }
}

export default Filters;
