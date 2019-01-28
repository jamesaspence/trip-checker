import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthForm from './AuthForm';
import FormInput from './FormInput';
import { validateEmpty } from '../../../util/validate';
import { attemptRegistration } from '../../../actions/auth';

const mapDispatchToProps = dispatch => ({
  attemptRegistration: (firstName, lastName, email, password, confirmPassword) => dispatch(attemptRegistration(firstName, lastName, email, password, confirmPassword))
});

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  onSubmit(formValues) {
    this.props.attemptRegistration(formValues.first_name, formValues.last_name, formValues.email, formValues.password, formValues.confirm_password);
  }

  onValidate(formValues) {
    const fields = {
      first_name: 'first name',
      last_name: 'last name',
      email: 'email',
      confirm_email: 'email confirmation',
      password: 'password',
      confirm_password: 'password confirmation'
    };

    return validateEmpty(formValues, fields);
  }

  render() {
    const { active } = this.props;

    return (
      <AuthForm
        name="registration"
        onValidate={this.onValidate}
        onSubmit={this.onSubmit}
        active={active}>
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

export default connect(state => state, mapDispatchToProps)(RegistrationForm);