import React from "react";
import FilterFormFields from './filter_form_fields';

import merge from "lodash/merge";

class FilterForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = merge({}, this.props.filters, {
      expanded: false
    });

    this.handleInput = this.handleInput.bind(this);
    this.renderFields = this.renderFields.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.filters);
  }

  handleInput(field, filter) {
    return e => {
      const nextState = merge({}, this.state[field], {
        [filter]: e.currentTarget.value || !this.state[field][filter]
      });

      this.setState({[field]: nextState});
      this.props.updateFilter(field, nextState);
    }
  }

  renderFields(field, type) {
    return (
      Object.keys(this.state[field]).map((filter, idx) => (
        type ? (
          <label key={idx}>
            {filter}
            <div className="rent hvr-reveal">
              <div className="dollar-img background-img hvr-pulse" />
              <input
                type="number"
                value={this.state[field][filter]}
                step="50"
                onChange={this.handleInput(field, filter)} />
            </div>
          </label>
        ) : (
          <button
            key={idx}
            type="button"
            className={`${this.state[field][filter] ? 'selected' : ''}`}
            onClick={this.handleInput(field, filter)} >
            {filter === "noFee" ? "no broker fee" : filter}
          </button>
        )
      ))
    );
  }

  render() {
    const { expanded } = this.state;

    return (
      <section id='filter-form' className='filter-form'>
        <form>
          <FilterFormFields
            field="rent"
            fields={this.renderFields("rent", "number")} />
          <FilterFormFields
            field="bedrooms"
            fields={this.renderFields("bedrooms")} />
          <FilterFormFields
            field="bathrooms"
            fields={this.renderFields("bathrooms")} />
          <div id='more-filters' className={`more-filters ${expanded ? "expanded" : "hidden"}`}>
            <FilterFormFields
              field="type"
              fields={this.renderFields("listingType")} />
            <FilterFormFields
              field="pets"
              fields={this.renderFields("pets")} />
            <FilterFormFields
              field="advanced"
              fields={this.renderFields("advanced")} />
          </div>
        </form>
        <div className="sidebar-btns">
          <button
            type="button"
            className='hvr-fade'
            onClick={() => this.setState({"expanded": !expanded})}>
            {expanded ? "done" : "more filters"}
          </button>
          <button
            type="button"
            className='hvr-fade'
            onClick={this.props.resetFilters}>
            reset
          </button>
        </div>
      </section>
    )
  }
}

export default FilterForm;
