import React, { Component } from 'react';
import AuthForm from './AuthForm';
import FormInput from './FormInput';
import { connect } from 'react-redux';
import { attemptLogin } from '../../../actions/auth';

const mapDispatchToProps = dispatch => ({
  attemptLogin: (email, password) => dispatch(attemptLogin(email, password))
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formValues) {
    console.log('submitting to API');
    console.log(formValues);

    this.props.attemptLogin(formValues.email, formValues.password);
  }

  render() {
    const { active } = this.props;

    return (
      <AuthForm
        active={active}
        onSubmit={this.onSubmit}
        requiredFields={["email", "password"]}>
        <FormInput type="email" name="email" placeholder="Email" autoComplete="email" />
        <FormInput type="password" name="password" placeholder="Password" autoComplete="current-password" />
      </AuthForm>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(LoginForm);