import React, { Component } from 'react';
import { SWITCH_LOGIN } from '../Switcher';
import AuthForm from './AuthForm';
import FormInput from './FormInput';

const expectedKeys = [
  'email', 'password'
];

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      formValues: {}
    };
  }

  onSubmit(formValues) {
    const failedFields = [];

    expectedKeys.forEach(key => {
      if (!formValues.hasOwnProperty(key) || typeof formValues[key] !== 'string' || formValues[key].trim() === '') {
        failedFields.push(key);
      }
    });

    if (failedFields.length > 0) {
      console.log('failed validation');
      return;
    }

    console.log('submitting to API');
  }



  render() {
    const { switchForm } = this.props;

    return (
      <AuthForm
        header="Login"
        active={switchForm === SWITCH_LOGIN}
        onSubmit={this.onSubmit}>
        <FormInput type="text" name="email" placeholder="Email" />
        <FormInput type="password" name="password" placeholder="Password" />
      </AuthForm>
    );
  }
}

export default LoginForm;