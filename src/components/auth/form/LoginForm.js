import React, { Component } from 'react';
import { SWITCH_LOGIN } from '../Switcher';
import AuthForm from './AuthForm';
import FormInput from './FormInput';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      formValues: {}
    };
  }

  onSubmit(formValues) {
    console.log('submitting to API');
    console.log(formValues);
  }

  render() {
    const { switchForm } = this.props;

    return (
      <AuthForm
        header="Login"
        active={switchForm === SWITCH_LOGIN}
        onSubmit={this.onSubmit}
        requiredFields={["email", "password"]}>
        <FormInput type="email" name="email" placeholder="Email" autoComplete="email" required />
        <FormInput type="password" name="password" placeholder="Password" required />
      </AuthForm>
    );
  }
}

export default LoginForm;