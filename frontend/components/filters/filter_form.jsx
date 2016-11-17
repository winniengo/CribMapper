import React from "react";
import FilterFormInput from './filter_form_input';
// import FilterTags from './filter_tags';

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
        type === "button" ? (
          <button
            key={idx}
            type="button"
            className={this.state[field][filter] ? "selected" : ""}
            onClick={this.handleInput(field, filter)} >
            {filter}
          </button>
        ) : (
          <label key={idx}>
            {filter}
            <div className="rent">
              <div className="dollar-img background-img" />
              <input
                type="number"
                value={this.state[field][filter]}
                step="50"
                onChange={this.handleInput(field, filter)} />
            </div>
          </label>
        )
      ))
    );
  }

  render() {
    const { expanded } = this.state;

    return (
      <div className='filters'>
        <form>
          <FilterFormInput
            field="rent"
            fields={this.renderFields("rent", "number")} />
          <FilterFormInput
            field="bedrooms"
            fields={this.renderFields("bedrooms", "button")} />
          <FilterFormInput
            field="bathrooms"
            fields={this.renderFields("bathrooms", "button")} />
          <div id='expand' className={expanded ? "expanded" : "hidden"}>
            <FilterFormInput
              field="type"
              fields={this.renderFields("listingType", "button")} />
            <FilterFormInput
              field="pets"
              fields={this.renderFields("pets", "button")} />
            <FilterFormInput
              field="advanced"
              fields={this.renderFields("advanced", "button")} />
          </div>
        </form>
        <div className="sidebar-buttons">
          <button
            type="button"
            onClick={() => this.setState({"expanded": !expanded})}>
            {expanded ? "done" : "more filters"}
          </button>
          <button
            type="button"
            onClick={this.props.resetFilters}>
            reset
          </button>
        </div>
      </div>
    )
  }
}

export default FilterForm;
