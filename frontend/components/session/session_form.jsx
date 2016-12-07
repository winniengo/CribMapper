import React from 'react';
import { Link } from 'react-router';

import LoginForm from './login_form';
import SignupForm from './signup_form';

import SessionErrors from './session_errors';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sessionType: 'login'};

    this.clearErrors = this.clearErrors.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillUnmount() {
    this.clearErrors();
  }

  clearErrors() {
    if (this.props.errors.length !== 0) {
      this.props.clearErrors();
    }
  }

  switchForm() {
    this.clearErrors();
    this.setState({
      sessionType: this.state.sessionType === 'login' ? 'signup' : 'login'
    })
  }

  demo() {
    this.props.login({
      email: "guest",
      password: "password"
    });
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
      <div className='session modal'>
        {this.renderForm()}
        <footer>
          <a onClick={this.demo} className='hvr-underline-from-center'>Or explore as a guest!</a>
        </footer>
      </div>
    );
  }
}


export default SessionForm;
