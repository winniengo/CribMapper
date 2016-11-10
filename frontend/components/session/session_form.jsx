import React from 'react';
import { Link } from 'react-router';

import LoginForm from './login_form';
import SignupForm from './signup_form';

import SessionErrors from './session_errors';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sessionType: 'login'};

    this.switchForm = this.switchForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.errors.length !== 0) {
      this.props.clearErrors();
    }
  }

  componentWillUnmount() {
    if (this.props.errors.length !== 0) {
      this.props.clearErrors();
    }
  }

  switchForm() {
    this.setState({
      sessionType: this.state.sessionType === 'login' ? 'signup' : 'login'
    })
  }

  renderForm() {
    if (this.state.sessionType === 'login') {
      return (
        <LoginForm
          errors={this.props.errors}
          login={this.props.login}
          switchForm={this.switchForm} />
      );
    } else {
      return (
        <SignupForm
          errors={this.props.errors}
          signup={this.props.signup}
          switchForm={this.switchForm} />
      );
    }
  }

  render() {
    return (
      <div className='session-form'>
        <div className='logo-img background-img' />
        {this.renderForm()}
      </div>
    );
  }
}


export default SessionForm;
