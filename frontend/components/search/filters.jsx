import React from "react";
import merge from "lodash/merge";

import ListingIndex from "../listings/listing_index";

class Filters extends React.Component{
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.filters);

    this.handleChange = this.handleChange.bind(this);
    this.renderCheckboxes = this.renderCheckboxes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.filters);
  }

  handleRentChange(field) {
    return e => {
      const nextState = merge({}, this.state.rent, {
        [field]: e.currentTarget.value
      });

      this.setState({rent: nextState});
      this.props.updateRent(nextState);
    }
  }

  handleChange(filter, dispatchAction) {
    return field => e => {
      const nextState = merge({}, this.state[filter], {
        [field]: !this.state[filter][field]
      });

      this.setState({[filter]: nextState});
      dispatchAction(nextState);
    }
  }

  handleClick(filter, dispatchAction) {
    return e => {
      this.setState({[filter]: !this.state[filter]});
      dispatchAction();
    }
  }

  renderCheckboxes(filter, handler) {
    return (
      Object.keys(filter).map(option => (
        <label className="filters-form-field">
          {option}
          <input
            type="checkbox"
            checked={filter[option] ? "checked" : ""}
            onChange={handler(option)} />
        </label>
      ))
    )
  }

  render() {
    const {
      rent,
      listingType,
      bedrooms,
      bathrooms,
      noFeeSelected,
      parkingSelected,
      pets } = this.state;
    const {
      updateRent,
      updateListingType,
      updateBedrooms,
      updateBathrooms,
      updateFee,
      updateParking,
      updatePets,
      resetFilters } = this.props;

    // console.log(noFeeSelected, parkingSelected);

    return (
      <div className="filters-form">
        <form>
          <h3>Rent</h3>
          <label className="filters-form-field">
            Min
            <input
              type="number"
              value={rent.min}
              onChange={this.handleRentChange("min")} />
          </label>
          <label className="filters-form-field">
            Max
            <input
              type="number"
              value={rent.max}
              onChange={this.handleRentChange("max")} />
          </label>
          <h3>Type</h3>
          {this.renderCheckboxes(listingType, this.handleChange("listingType", updateListingType))}
          <h3>Bedrooms</h3>
          {this.renderCheckboxes(bedrooms, this.handleChange("bedrooms", updateBedrooms))}
          <h3>Bathrooms</h3>
          {this.renderCheckboxes(bathrooms, this.handleChange("bathrooms", updateBathrooms))}
          <h3>Pets</h3>
          {this.renderCheckboxes(pets, this.handleChange("pets", updatePets))}
          <h3>Advanced</h3>
          <label className="filters-form-field">
            <button
              type="button"
              className={noFeeSelected ? "selected" : ""}
              onClick={this.handleClick("noFeeSelected", updateFee)}>
              No Broker Fee
            </button>
          </label>
          <label className="filters-form-field">
            <button
              type="button"
              className={parkingSelected ? "selected" : ""}
              onClick={this.handleClick("parkingSelected", updateParking)}>
              Parking
            </button>
          </label>
        </form>
        <button
          type="button"
          onClick={resetFilters}>
          Reset
        </button>
      </div>
    )
  }
}

export default Filters;
