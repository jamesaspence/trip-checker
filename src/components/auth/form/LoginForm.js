import React, { Component } from 'react';
import AuthForm from './AuthForm';
import FormInput from './FormInput';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formValues) {
    console.log('submitting to API');
    console.log(formValues);
  }

  render() {
    const { active } = this.props;

    return (
      <AuthForm
        header="Login"
        active={active}
        onSubmit={this.onSubmit}
        requiredFields={["email", "password"]}>
        <FormInput type="email" name="email" placeholder="Email" autoComplete="email" required />
        <FormInput type="password" name="password" placeholder="Password" autoComplete="current-password" required />
      </AuthForm>
    );
  }
}

export default LoginForm;