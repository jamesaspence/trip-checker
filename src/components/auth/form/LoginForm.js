import React from 'react';
import { SWITCH_LOGIN } from '../Switcher';
import AuthForm from './AuthForm';
import FormInput from './FormInput';

const LoginForm = ({ switchForm }) => (
  <AuthForm
    header="Login"
    active={switchForm === SWITCH_LOGIN}>
    <FormInput type="text" name="email" placeholder="Email" />
    <FormInput type="password" name="password" placeholder="Password" />
  </AuthForm>
);

export default LoginForm;