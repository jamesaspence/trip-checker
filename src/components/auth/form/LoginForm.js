import React, { Component } from 'react';
import AuthForm from './AuthForm';
import FormInput from './FormInput';
import { connect } from 'react-redux';
import { attemptLogin } from '../../../actions/auth';
import { isEmpty } from './validate';

const mapDispatchToProps = dispatch => ({
  attemptLogin: (email, password) => dispatch(attemptLogin(email, password))
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }

  onSubmit(formValues) {
    console.log('submitting to API');
    console.log(formValues);

    this.props.attemptLogin(formValues.email, formValues.password);
  }

  onValidate(formValues) {
    const errors = {};

    const requiredFields = {
      email: 'email',
      password: 'password',
    };

    Object.keys(requiredFields).forEach(field => {
      if (isEmpty(formValues[field])) {
        errors[field] = `Please provide a ${requiredFields[field]}.`;
      }
    });

    return errors;
  }

  render() {
    const { active } = this.props;

    return (
      <AuthForm
        name="login"
        active={active}
        onSubmit={this.onSubmit}
        onValidate={this.onValidate}>
        <FormInput type="email" name="email" placeholder="Email" autoComplete="email" />
        <FormInput type="password" name="password" placeholder="Password" autoComplete="current-password" />
      </AuthForm>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(LoginForm);