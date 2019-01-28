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
        active={active}
        requiredFields={["first_name", "last_name", "email", "confirm_email", "password", "confirm_password"]}>
        <FormInput type="text" name="first_name" placeholder="First Name" autoComplete="given-name" />
        <FormInput type="text" name="last_name" placeholder="Last Name" autoComplete="family-name" />
        <FormInput type="email" name="email" placeholder="Email" autoComplete="email" />
        <FormInput type="email" name="confirm_email" placeholder="Email Confirmation" autoComplete="email" />
        <FormInput type="password" name="password" placeholder="Password" autoComplete="new-password" />
        <FormInput type="password" name="confirm_password" placeholder="Password Confirmation" autoComplete="new-password" />
      </AuthForm>
    );
  }
}

export default RegistrationForm;