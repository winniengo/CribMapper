import React from "react";
import merge from "lodash/merge";

import ListingIndex from "../listings/listing_index";

class Filters extends React.Component{
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.filters);

    this.handleChange = this.handleChange.bind(this);
    // this.renderCheckboxes = this.renderCheckboxes.bind(this);
    this.renderFields = this.renderFields.bind(this);
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

  // renderCheckboxes(filter, handler) {
  //   return (
  //     Object.keys(filter).map(option => (
  //       <label>
  //         {option}
  //         <input
  //           type="checkbox"
  //           checked={filter[option] ? "checked" : ""}
  //           onChange={handler(option)} />
  //       </label>
  //     ))
  //   )
  // }

  renderFields(filter, handler) {
    return (
      Object.keys(filter).map(field => (
        <button
          type="button"
          className={filter[field] ? "selected" : ""}
          onClick={handler(field)}>
          {field}
        </button>
      ))
    );
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
        <form>
          <div className="filter">
            <h3>rent</h3>
            <div className="filter-fields">
              <label>
                min
                <input
                  type="number"
                  value={rent.min}
                  onChange={this.handleRentChange("min")} />
              </label>
              <label>
                max
                <input
                  type="number"
                  value={rent.max}
                  onChange={this.handleRentChange("max")} />
              </label>
            </div>
          </div>
          <div className="filter">
            <h3>type</h3>
            <div className="filter-fields">
              {this.renderFields(listingType, this.handleChange("listingType", updateListingType))}
            </div>
          </div>
          <div className="filter">
            <h3>bedrooms</h3>
            <div className="filter-fields">
              {this.renderFields(bedrooms, this.handleChange("bedrooms", updateBedrooms))}
            </div>
          </div>
          <div className="filter">
            <h3>bathrooms</h3>
            <div className="filter-fields">
              {this.renderFields(bathrooms, this.handleChange("bathrooms", updateBathrooms))}
            </div>
          </div>
          <div className="filter">
            <h3>pets</h3>
            <div className="filter-fields">
              {this.renderFields(pets, this.handleChange("pets", updatePets))}
            </div>
          </div>
          <div className="filter">
            <h3>advanced</h3>
            <div className='filter-fields'>
              <button
                type="button"
                className={noFeeSelected ? "selected" : ""}
                onClick={this.handleClick("noFeeSelected", updateFee)}>
                no broker fee
              </button>
              <button
                type="button"
                className={parkingSelected ? "selected" : ""}
                onClick={this.handleClick("parkingSelected", updateParking)}>
                parking
              </button>
            </div>
          </div>
        <button
          type="button"
          onClick={resetFilters}>
          Reset
        </button>
        </form>
    )
  }
}

export default Filters;
