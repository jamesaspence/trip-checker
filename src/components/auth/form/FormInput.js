import React from 'react';

import './FormInput.scss';

const FormInput = ({ error, onChange, ...rest }) => {
  const { type, name } = rest;
  return (
    <input className={`form-input type-${type} ${error ? 'error' : ''}`} onChange={event => onChange(name, event.target.value)} {...rest} />
  );
};

export default FormInput;