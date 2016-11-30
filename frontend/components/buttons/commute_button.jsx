import React from 'react';
import Modal from 'react-modal';
import CommuteForm from './commute_form';

import merge from 'lodash/merge';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class CommuteButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};

    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.router.push('/');
    }

    if (this.props.currentUser.place_id !== nextProps.currentUser.place_id) {
      this.closeModal(); // work address is updated
    }
  }

  handleClick() {
    if (!this.props.loggedIn) {
      this.props.openModal(); // opens session modal
    } else {
      this.openModal(); // opens commute form modal
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  updateCurrentUser({ lat, lng, place_id, address }) {
    let nextCurrentUser = merge({}, this.props.currentUser);
    nextCurrentUser.lat = lat;
    nextCurrentUser.lng = lng;
    nextCurrentUser.address = address;
    nextCurrentUser.place_id = place_id;

    this.props.updateCurrentUser(nextCurrentUser);
  }

  render() {
    const link = this.props.loggedIn && this.props.currentUser.lat ? 'Update' : 'Add';

    return (
       <div className='link-container'>
        <a onClick={this.handleClick}>{link}</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <CommuteForm
            updateCurrentUser={this.updateCurrentUser}
            currentUser={this.props.currentUser}
            closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

export default CommuteButton;
