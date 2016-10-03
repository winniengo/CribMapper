import React from 'react';
import { withRouter } from 'react-router';

import SessionErrors from './session_errors';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
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
    <div className='signup-form'>
      <SessionErrors errors={this.props.errors} />
      <form onSubmit={this.handleSubmit}>
        <label className='signup-form-field'>
          Name
        </label>
        <label className='signup-form-field'>
          Email
        </label>
        <label className='signup-form-field'>
          Password
        </label>
        <label className='signup-form-field'>
          Confirm Password
        </label>
      </form>
    </div>
  }
}

export default SignupForm;
