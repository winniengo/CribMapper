import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session/session_form_container';

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


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};

    this.renderSessionLink = this.renderSessionLink.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderSessionLink() {
    if (this.props.loggedIn) {
      return <div onClick={this.props.logout}>log out</div>;
    } else {
      return (
        <div className='link-container'>
          <a onClick={this.openModal}>Sign In</a>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <SessionFormContainer />
          </Modal>
        </div>
      );
    }
  }

  render () {
    return (
      <div className='navbar'>
        <div className='logo'>
          <Link to="/">
            <div className='logo-img background-img' />
            <h2>CribMapper</h2>
          </Link>
        </div>
        <div className='links'>
          <div className='link-container'>
            <a onClick={() => this.props.router.push('/favorites')}>
              Favorites
            </a>
          </div>
          {this.renderSessionLink()}
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
