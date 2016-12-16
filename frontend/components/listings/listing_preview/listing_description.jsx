import React from 'react';

class ListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};

    this.renderReadMore = this.renderReadMore.bind(this);
  }

  componentWillReceiveProps({ description }) {
    if (this.props.description !== description) { // collapse on new listing
      this.setState({expanded: false});
    }
  }

  renderReadMore() {
    return this.state.expanded ? <div /> : <a className='hvr-underline-from-center' onClick={() => this.setState({expanded: !this.state.expanded})}>Read more...</a>;
  }

  renderOverlay() {
    return this.state.expanded ? <div /> : <div className='overlay' />;
  }

  render() {
    return (
      <section className='listing-description'>
        <section>
          <div className={this.state.expanded ? 'expanded' : 'hidden'}>
            <p>{this.props.description}</p>
          </div>
          {this.renderOverlay()}
        </section>
        {this.renderReadMore()}
      </section>
    );
  }
}

export default ListingDescription;
