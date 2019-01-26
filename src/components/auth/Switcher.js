import React from 'react';

import './Switcher.scss';

const SwitchOption = ({ onSwitch, switchState, text }) => (
  <div className="switch-option" onClick={() => onSwitch(switchState)}>
    <h2 className="option-text">{text}</h2>
  </div>
);

const Switcher = ({ onSwitch }) => (
  <div className="switcher">
    <SwitchOption onSwitch={onSwitch} switchState={SWITCH_LOGIN} text="Login"/>
    <SwitchOption onSwitch={onSwitch} switchState={SWITCH_REGISTRATION} text="Register"/>
  </div>
);

export const SWITCH_LOGIN = 'login';
export const SWITCH_REGISTRATION = 'registration';

export default Switcher;