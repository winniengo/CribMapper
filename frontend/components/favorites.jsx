import React from 'react';
import Modal from 'react-modal';
import { withRouter }from 'react-router';

import ListingModal from './listings/listing_modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '80%',
    height                : '80%',
    overflow              : 'scroll',
    maxWidth              : '800px',
    minWidth             : '660px'
  }
};


class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.location.pathname.split('/').slice(-1)[0],
      modalIsOpen: false,
      listing: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.router.push('/search/index');
    }
  }

  handleClick(e) {
    this.setState({selected: e.currentTarget.value});
    this.props.router.push(`/favorites/${e.currentTarget.value}`);
  }

  openModal(listing) {
    this.setState({modalIsOpen: true, listing });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
      <div className='background'>
        <div className='favorites'>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}>
            <ListingModal
              listing={this.state.listing} />
          </Modal>
          <div className="views">
            {this.renderButtons()}
          </div>
          <section className='view'>
                <div className='comparison-list'>
                  <h2>Compare your Favorites</h2>
                  {React.cloneElement(this.props.children, { openModal: this.openModal, listings: this.props.listings })}
                </div>
          </section>
        </div>
      </div>
    )
  }
}

export default withRouter(Favorites);
