import React from 'react';
import { withRouter, Link } from 'react-router';

import SessionErrors from './session_errors';

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

  componentWillReceiveProps(nextProps) {
    // if (this.props.errors.length !== 0) {
    //   this.props.clearErrors();
    // }
  }

  componentWillUnmount() {
    if (this.props.errors.length !== 0) {
      this.props.clearErrors();
    }
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
      <div className='signup-form'>
        <h2>Create an Account</h2>
        <SessionErrors errors={this.props.errors} />
        <form onSubmit={this.handleSubmit}>
          <label className='signup-form-field'>
            Name
            <input
              type='text'
              value={this.state.name}
              onChange={this.update('name')}
              className='signup-form-field'/>
          </label>
          <label className='signup-form-field'>
            Email
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
              className='signup-form-field'/>
          </label>
          <label className='signup-form-field'>
            Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              className='signup-form-field'/>
          </label>
          <input type='submit' value='Sign up' />
        </form>
        Already have an account? <Link to="/login">Log in!</Link>
      </div>
    );
  }
}


export default SignupForm;
