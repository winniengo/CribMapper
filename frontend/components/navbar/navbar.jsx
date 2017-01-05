import React from 'react';
import { Link, withRouter } from 'react-router';

import Alert from './alert';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex                : 2,
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirectToFavorites: false};

    this.renderSessionLink = this.renderSessionLink.bind(this);
    this.renderNavLink = this.renderNavLink.bind(this);
    this.redirectToFavorites = this.redirectToFavorites.bind(this);
    this.redirectToSearch = this.redirectToSearch.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps({ loggedIn, alert }) {
    if (!this.props.loggedIn && loggedIn) {
      if (this.state.redirectToFavorites) {
        this.props.router.push('favorites');
      }
      this.closeModal();
    }

    if (alert) {
      const id = setTimeout(() => {
        this.props.clearAlert();
        clearTimeout(id);
      }, 2500);
    }
  }

  closeModal() {
    this.props.closeModal();
    if (this.state.redirectToFavorites) {
      this.setState({redirectToFavorites: false});
    }
  }

  redirectToSearch() {
    this.props.router.push('search');
  }

  redirectToFavorites() {
    if (this.props.loggedIn) {
      this.props.router.push('favorites');
    } else {
      this.props.openModal();
      this.setState({redirectToFavorites: true})
    }
  }

  renderSessionLink() {
    return this.props.loggedIn ? (
      <div className='link-container'>
        <a onClick={this.props.logout} className='hvr-underline-from-center'>
          log out
        </a>
      </div>
    ) : (
      <div className='link-container'>
        <a onClick={this.props.openModal} className='hvr-underline-from-center'>
          sign in
        </a>
        <Modal
          isOpen={this.props.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal">
          <SessionFormContainer />
        </Modal>
      </div>
    );
  }

  renderNavLink() {
    return this.props.pathname.includes('favorites') ? (
      <div className='link-container'>
        <a onClick={this.redirectToSearch} className='hvr-underline-from-center'>
          search
        </a>
      </div>
    ) : (
      <div className='link-container'>
        <a onClick={this.redirectToFavorites} className='hvr-underline-from-center'>
          favorites
        </a>
      </div>
    );
  }

  renderAlert() {
    return this.props.alert ? <Alert alert={this.props.alert} /> : ''
  }

  render () {
    const { alert, clearAlert } = this.props;
    return (
      <header className='navbar'>
        <div className='logo'>
          <Link to="/">
            <div className='logo-img background-img hvr-pulse' />
            <h3>CribMapper</h3>
          </Link>
        </div>
        {this.renderAlert()}
        <div className='links'>
          {this.renderNavLink()}
          {this.renderSessionLink()}
        </div>
      </header>
    );
  }
}

export default withRouter(Navbar);
