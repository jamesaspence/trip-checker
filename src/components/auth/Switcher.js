import React from 'react';

import './Switcher.scss';

const SwitchOption = ({ onSwitch, currentSwitch, switchState, text }) => (
  <div className={`switch-option ${currentSwitch === switchState ? 'active' : ''}`} onClick={() => onSwitch(switchState)}>
    <h2 className="option-text">{text}</h2>
  </div>
);

const Switcher = ({ onSwitch, currentSwitch }) => (
  <div className="switcher">
    <SwitchOption onSwitch={onSwitch} currentSwitch={currentSwitch} switchState={SWITCH_LOGIN} text="Login"/>
    <SwitchOption onSwitch={onSwitch} currentSwitch={currentSwitch} switchState={SWITCH_REGISTRATION} text="Register"/>
  </div>
);

export const SWITCH_LOGIN = 'login';
export const SWITCH_REGISTRATION = 'registration';

export default Switcher;