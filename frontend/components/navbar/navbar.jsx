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
    this.state = {redirectToFavorites: false};

    this.renderSessionLink = this.renderSessionLink.bind(this);
    this.handleRedirectToFavorites = this.handleRedirectToFavorites.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeModal();
    if (this.state.redirectToFavorites) {
      this.setState({redirectToFavorites: false});
    }
  }

  componentWillReceiveProps(nextProps, ownState) {
    if (!this.props.loggedIn && nextProps.loggedIn) {
      if (this.state.redirectToFavorites) {
        this.props.router.push('favorites/map');
      }
      this.closeModal();
    }
  }

  handleRedirectToFavorites() {
    if (this.props.loggedIn) {
      this.props.router.push('favorites/map');
    } else {
      this.props.openModal();
      this.setState({redirectToFavorites: true})
    }
  }

  renderSessionLink() {
    if (this.props.loggedIn) {
      return (
        <div className='link-container'>
          <a onClick={this.props.logout}>Log Out</a>
        </div>
      )
    } else {
      return (
        <div className='link-container'>
          <a onClick={this.props.openModal}>Sign In</a>
          <Modal
            isOpen={this.props.modalOpen}
            onRequestClose={this.closeModal}
            style={customStyles}>
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
            <a onClick={this.handleRedirectToFavorites}>
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
