import React from "react";

import merge from "lodash/merge";

class Filters extends React.Component{
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.filters, {
      expanded: false
    });

    this.renderFields = this.renderFields.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.expandFilters = this.expandFilters.bind(this);
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

  expandFilters(e) {
    this.setState({
      expanded: !this.state.expanded
    });
  }

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
      pets,
      expanded } = this.state;

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
            <div className="fields">
              <label>
                min
                <div className="rent">
                  <div className="dollar-img background-img" />
                  <input
                    type="number"
                    value={rent.min}
                    step="50"
                    max={rent.max}
                    onChange={this.handleRentChange("min")} />
                </div>
                </label>
                <label>
                  max
                  <div className='rent'>
                    <div className="dollar-img background-img" />
                    <input
                      type="number"
                      value={rent.max}
                      step="50"
                      min={rent.min}
                      onChange={this.handleRentChange("max")} />
                  </div>
                </label>
              </div>
          </div>
          <div className="filter">
            <h3>bedrooms</h3>
            <div className="fields">
              {this.renderFields(bedrooms, this.handleClick("bedrooms", updateBedrooms))}
            </div>
          </div>
          <div className="filter">
            <h3>bathrooms</h3>
            <div className="fields">
              {this.renderFields(bathrooms, this.handleClick("bathrooms", updateBathrooms))}
            </div>
          </div>
          <div id='expand' className={expanded ? "expanded" : "hidden"}>
            <div className="filter">
              <h3>type</h3>
              <div className="fields">
                {this.renderFields(listingType, this.handleClick("listingType", updateListingType))}
              </div>
            </div>
            <div className="filter">
              <h3>pets</h3>
              <div className="fields">
                {this.renderFields(pets, this.handleClick("pets", updatePets))}
              </div>
            </div>
            <div className="filter">
              <h3>advanced</h3>
              <div className='fields'>
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
          </div>
        </form>
        <div className="filter-buttons">
          <button
            type="button"
            onClick={this.expandFilters}>
            {expanded ? "done" : "more filters"}
          </button>
          <button
            type="button"
            onClick={resetFilters}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Filters;
