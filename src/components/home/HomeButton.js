import React from 'react';

const HomeButton = ({classes, text}) => (
  <button type="button" className={`home-button ${classes ? classes : ''}`}>{text}</button>
);

export default HomeButton;