import React from "react";
import merge from "lodash/merge";

class Filters extends React.Component{
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.filters);

    this.renderFields = this.renderFields.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  handleClick(filter, dispatchAction) {
    return field => e => {
      const nextState = merge({}, this.state[filter], {
        [field]: !this.state[filter][field]
      });

      this.setState({[filter]: nextState});
      dispatchAction(nextState);
    }
  }

  handleSelect(filter, dispatchAction) {
    return e => {
      this.setState({[filter]: !this.state[filter]});
      dispatchAction();
    }
  }

  // handleSlider(component, values) {
  //   const nextState = {
  //     min: values[0],
  //     max: values[1]
  //   };
  //
  //   this.setState({rent: nextState});
  //   this.props.updateRent(nextState);
  // }

  renderFields(filter, handler) {
    return (
      Object.keys(filter).map((field, idx) => (
        <button
          key={idx}
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

    return (
      <div className='filters'>
        <form>
          <div className="filter">
            <h3>rent</h3>
              <div className="filter-fields rent">
              <label>
                min
                <input
                  type="number"
                  value={rent.min}
                  step="50"
                  max={rent.max}
                  onChange={this.handleRentChange("min")} />
              </label>
              <label>
                max
                <input
                  type="number"
                  value={rent.max}
                  step="50"
                  min={rent.min}
                  onChange={this.handleRentChange("max")} />
              </label>
            </div>
          </div>
          <div className="filter">
            <h3>type</h3>
            <div className="filter-fields">
              {this.renderFields(listingType, this.handleClick("listingType", updateListingType))}
            </div>
          </div>
          <div className="filter">
            <h3>bedrooms</h3>
            <div className="filter-fields">
              {this.renderFields(bedrooms, this.handleClick("bedrooms", updateBedrooms))}
            </div>
          </div>
          <div className="filter">
            <h3>bathrooms</h3>
            <div className="filter-fields">
              {this.renderFields(bathrooms, this.handleClick("bathrooms", updateBathrooms))}
            </div>
          </div>
          <div className="filter">
            <h3>pets</h3>
            <div className="filter-fields">
              {this.renderFields(pets, this.handleClick("pets", updatePets))}
            </div>
          </div>
          <div className="filter">
            <h3>advanced</h3>
            <div className='filter-fields'>
              <button
                type="button"
                className={noFeeSelected ? "selected" : ""}
                onClick={this.handleSelect("noFeeSelected", updateFee)}>
                no broker fee
              </button>
              <button
                type="button"
                className={parkingSelected ? "selected" : ""}
                onClick={this.handleSelect("parkingSelected", updateParking)}>
                parking
              </button>
            </div>
          </div>
          <div className="filter-buttons">
            <button
              type="button"
              onClick={resetFilters}>
              More Filters
            </button>
            <button
              type="button"
              onClick={resetFilters}>
              Reset
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Filters;
