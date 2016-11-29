import React from 'react';
import { withRouter }from 'react-router'

// import ListingIndexContainer from './listings/listing_index/listing_index_container';
import AboutMe from './about_me';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'list-view'};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({selected: e.currentTarget.value});
    this.props.router.push(`favorites/${e.currentTarget.value}`);
  }

  renderButtons() {
    return (
      ['list-view', 'map-view', 'thumbnail-view'].map((view, idx) => (
        <button
          key={idx}
          type="button"
          value={view}
          onClick={this.handleClick}
          className={this.state.selected === view ? 'selected' : ''}>
          <div className={`background-img icon ${view}`} />
        </button>
      ))
    );
  }

  render() {
    return (

      <div className='favorites'>
        <div className="views">
          {this.renderButtons()}
        </div>
        <section className='view'>
              <div className='comparison-list'>
                <h2>Compare your Favorites</h2>
          {this.props.children}
              </div>
        </section>
      </div>
    )
  }
}

export default withRouter(Favorites);
