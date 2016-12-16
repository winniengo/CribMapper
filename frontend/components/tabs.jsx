import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: this.props.tabs[0] };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab) {
    return () => this.setState({selected: tab});
  }

  renderTabs() {
    return (
      this.props.tabs.map((tab, idx) => (
        <button
          key={idx}
          type="button"
          onClick={this.handleClick(tab)}
          className={`hvr-underline-from-center ${this.state.selected === tab ? 'selected' : ''}`}>
          <div className={`background-img icon ${tab}`} />
        </button>
      ))
    );
  }

  renderView() {
    for (var i = 0; i < this.props.tabs.length; i++) {
      if (this.props.tabs[i] === this.state.selected) {
        return this.props.views[i];
      }
    }
  }

  render() {
    return (
      <div className='tabs'>
        <div className="views">
          {this.renderTabs()}
        </div>
        <section className='view'>
          {this.renderView()}
        </section>
      </div>
    )
  }
}

export default Tabs;
