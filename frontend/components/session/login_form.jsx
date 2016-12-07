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
      <div className='modal-form'>
        <section className='header'>
          <div className='logo-img background-img' />
          <h2>Sign in</h2>
          to save your favorite listings
          <br/>
          and calculate your daily work commute
          <SessionErrors errors={this.props.errors} />
        </section>
        <section className='main'>
          <form onSubmit={this.handleSubmit}>
            <label>
              <div className='modal-form-field hvr-reveal'>
                <input
                  type='text'
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.update('email')} />
                <div className="email-img background-img" />
              </div>
            </label>
            <label>
              <div className='modal-form-field hvr-reveal'>
                <input
                  type='password'
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.update('password')} />
                <div className="password-img background-img" />
              </div>
            </label>
            <input type='submit' value='sign in' className='modal-btn'/>
          </form>
        </section>
        <footer>
          New to CribMapper?
          <a
            className="hvr-underline-from-center"
            onClick={() => this.props.switchForm()}>Create an account!</a>
        </footer>
      </div>
    );
  }
}


export default LoginForm;
