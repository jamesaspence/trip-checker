import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switcher, { SWITCH_LOGIN, SWITCH_REGISTRATION } from './Switcher';
import LoginForm from './form/LoginForm';
import RegistrationForm from './form/RegistrationForm';

import './AuthContainer.scss';

const mapStateToProps = () => ({});

// const mapDispatchToProps = () => {};

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
    return (
      <div className="auth-container full-container">
        <Switcher onSwitch={this.onSwitch}/>
        <LoginForm active={this.state.form === SWITCH_LOGIN}/>
        <RegistrationForm active={this.state.form === SWITCH_REGISTRATION}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AuthContainer);