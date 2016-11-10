import React from 'react';
import { Link } from 'react-router';

import SessionErrors from './session_errors';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div className='signup-form'>
        <section className='header'>
          <h2>Sign in</h2>
          to save your favorite listings
        </section>
        <SessionErrors errors={this.props.errors} />
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className='signup-form-field'>
              <input
                type='text'
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')} />
              <div className="email-img background-img" />
            </div>
          </label>
          <label>
            <div className='signup-form-field'>
              <input
                type='password'
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')} />
              <div className="password-img background-img" />
            </div>
          </label>
          <input type='submit' value='Sign in' className='session-btn'/>
        </form>
        <section className='footer'>
          New to CribMapper?
          <div
            className="switch-session-form"
            onClick={() => this.props.switchForm()}>Create an account!</div>
        </section>
      </div>
    );
  }
}


export default LoginForm;
