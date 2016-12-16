import React from 'react';

class ListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: true};

    this.renderReadMore = this.renderReadMore.bind(this);
  }

  componentWillReceiveProps({ description }) {
    if (this.props.description !== description) { // collapse on new listing
      this.setState({collapsed: true});
    }
  }
  renderReadMore() {
    return this.state.collapsed ? <a id='read-more' onClick={() => this.setState({collapsed: !this.state.collapsed})}>Read more...</a> : <div />;
  }

  render() {
    return (
      <section>
        <p className={`listing-description ${this.state.collapsed ? 'collapsed' : 'displayed'}`}>
          {this.props.description}
        </p>
        {this.renderReadMore()}
      </section>
    );
  }
}

export default ListingDescription;
