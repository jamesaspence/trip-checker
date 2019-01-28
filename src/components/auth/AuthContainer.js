import React, { Component } from 'react';
import Switcher, { SWITCH_LOGIN, SWITCH_REGISTRATION } from './Switcher';
import LoginForm from './form/LoginForm';
import RegistrationForm from './form/RegistrationForm';

import './AuthContainer.scss';

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.onSwitch = this.onSwitch.bind(this);

    this.state = {
      form: SWITCH_LOGIN
    }
  }

  onSwitch(switchState) {
    this.setState({
      form: switchState
    });
  }

  render() {
    const { form } = this.state;

    return (
      <div className="auth-container full-container">
        <Switcher onSwitch={this.onSwitch} currentSwitch={form}/>
        <LoginForm active={form === SWITCH_LOGIN}/>
        <RegistrationForm active={form === SWITCH_REGISTRATION}/>
      </div>
    );
  }
}

export default AuthContainer;