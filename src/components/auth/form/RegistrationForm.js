import React, { Component } from 'react';
import AuthForm from './AuthForm';
import FormInput from './FormInput';

class RegistrationForm extends Component {
  onSubmit(formValues) {

  }

  render() {
    const { active } = this.props;

    return (
      <AuthForm
        header="Registration"
        active={active}>
        <FormInput type="text" name="first_name" placeholder="First Name" autoComplete="given-name" required />
        <FormInput type="text" name="last_name" placeholder="Last Name" autoComplete="family-name" required />
        <FormInput type="text" name="email" placeholder="Email" autoComplete="email" required />
        <FormInput type="text" name="confirm_email" placeholder="Email Confirmation" autoComplete="email" required />
        <FormInput type="password" name="password" placeholder="Password" autoComplete="new-password" required />
        <FormInput type="password" name="confirm_password" placeholder="Password Confirmation" autoComplete="new-password" required />
      </AuthForm>
    );
  }
}

export default RegistrationForm;