import React from 'react';
import { SWITCH_REGISTRATION } from '../Switcher';
import AuthForm from './AuthForm';
import FormInput from './FormInput';


/*<AuthForm
  header="Registration"
  active={switchForm === SWITCH_REGISTRATION}>
    <FormInput type="text" name="first_name" placeholder="First Name" />
    <FormInput type="text" name="last_name" placeholder="Last Name" />
    <FormInput type="text" name="email" placeholder="Email" />
    <FormInput type="text" name="confirm_email" placeholder="Email Confirmation" />
    <FormInput type="password" name="password" placeholder="Password" />
    <FormInput type="password" name="confirm_password" placeholder="Password Confirmation" />
</AuthForm>*/

const RegistrationForm = ({ switchForm }) => (
  <div className="auth-form">Hello</div>
);

export default RegistrationForm;