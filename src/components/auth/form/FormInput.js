import React from 'react';

import './FormInput.scss';

const FormInput = ({ type, name, onChange, placeholder }) => (
  <input className={`form-input type-${type}`} type={type} name={name} placeholder={placeholder} onChange={event => onChange(name, event.target.value)} />
);

export default FormInput;