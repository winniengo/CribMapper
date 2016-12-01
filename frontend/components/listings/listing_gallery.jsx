import React from 'react';
import ImageDisplay from './image_display';

class ListingGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: 0}

    this.handleSelect = this.handleSelect.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleSelect(idx) {
    return () => {
      this.nextState = idx;
      if (idx > this.state.selected) {
        this.intervalId = setInterval(() => this.setState({
          selected: this.state.selected + 1
        }), 100);
      } else if (idx < this.state.selected ) {
          this.intervalId = setInterval(() => this.setState({
            selected: this.state.selected - 1
          }), 100);
      }
    }
  }

  handlePrevious() {
    this.setState({
      selected: this.state.selected === 0 ? this.props.images.length - 1 : this.state.selected - 1
    });
  }

  handleNext() {
    this.setState({
      selected: (this.state.selected + 1) % this.props.images.length
    });
  }

  render() {
    if (this.intervalId && this.state.selected === this.nextState) {
      clearInterval(this.intervalId);
    }

    return (
      <section className='listing-preview-gallery'>
        <ImageDisplay
          src={this.props.images[this.state.selected].src}
          handlePrevious={this.handlePrevious}
          handleNext={this.handleNext} />
        <section className='dots-gallery'>
        {this.props.images.map((img, idx) => (
          <div
            key={idx}
            className={`background-img ${this.state.selected == idx ? 'selected' : ''}`}
            onClick={this.handleSelect(idx)} />
        ))}
        </section>
      </section>
    );
  }
};

export default ListingGallery;
