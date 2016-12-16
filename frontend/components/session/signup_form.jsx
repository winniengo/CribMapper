import React from 'react';
import { withRouter, Link } from 'react-router';

import Errors from '../errors';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    this.props.signup(this.state);
  }

  render() {
    return (
      <div className='modal-form'>
        <section className='header'>
          <div className='logo-img background-img' />
          <h2>Create an Account</h2>
          to find the perfect rental
          <Errors errors={this.props.errors} />
        </section>
        <section className='main'>
          <form onSubmit={this.handleSubmit}>
            <label>
              <div className='modal-form-field hvr-reveal'>
                <input
                  type='text'
                  value={this.state.name}
                  placeholder="Name"
                  onChange={this.update('name')} />
                <div className="name-img background-img" />
              </div>
            </label>
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
                  placeholder='Password'
                  onChange={this.update('password')} />
                <div className="password-img background-img" />
              </div>
            </label>
            <input type='submit' value='sign up' className='modal-btn'/>
          </form>
        </section>
        <footer>
          Already have an account?
          <a
            className="hvr-underline-from-center"
            onClick={() => this.props.switchForm()}>Log in!</a>
        </footer>
      </div>
    );
  }
}


export default SignupForm;
