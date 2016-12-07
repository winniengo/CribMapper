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
    this.handleRedirectToFavorites = this.handleRedirectToFavorites.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeModal();
    if (this.state.redirectToFavorites) {
      this.setState({redirectToFavorites: false});
    }
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
      }, 3000);
    }
  }

  handleRedirectToFavorites() {
    if (this.props.loggedIn) {
      this.props.router.push('favorites');
    } else {
      this.props.openModal();
      this.setState({redirectToFavorites: true})
    }
  }

  renderSessionLink() {
    if (this.props.loggedIn) {
      return (
        <div className='link-container'>
          <a onClick={this.props.logout} className='hvr-underline-from-center'>Log Out</a>
        </div>
      )
    } else {
      return (
        <div className='link-container'>
          <a onClick={this.props.openModal} className='hvr-underline-from-center'>Sign In</a>
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

  renderNavLink() {
    return this.props.pathname.includes('favorites') ?
    <a onClick={()=> this.props.router.push('search')} className='hvr-underline-from-center'>
      Search
    </a> :
    <a onClick={this.handleRedirectToFavorites} className='hvr-underline-from-center'>
      Favorites
    </a>
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
            <div className='logo-img background-img' />
            <h3>CribMapper</h3>
          </Link>
        </div>
        {this.renderAlert()}
        <div className='links'>
          <div className='link-container'>
            {this.renderNavLink()}
          </div>
          {this.renderSessionLink()}
        </div>
      </header>
    );
  }
}

export default withRouter(Navbar);
