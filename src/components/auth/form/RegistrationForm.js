import React from 'react';
import { SWITCH_REGISTRATION } from '../Switcher';
import AuthForm from './AuthForm';
import FormInput from './FormInput';

const RegistrationForm = ({ switchForm }) => (
  <AuthForm
    header="Registration"
    active={switchForm === SWITCH_REGISTRATION}>
    <FormInput type="text" name="first_name" placeholder="First Name" />
    <FormInput type="text" name="last_name" placeholder="Last Name" />
    <FormInput type="text" name="email" placeholder="Email" />
    <FormInput type="text" name="confirm_email" placeholder="Email Confirmation" />
    <FormInput type="password" name="password" placeholder="Password" />
    <FormInput type="password" name="confirm_password" placeholder="Password Confirmation" />
  </AuthForm>
);

export default RegistrationForm;