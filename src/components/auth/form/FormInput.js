import React from 'react';

const FormInput = ({ type, name, placeholder }) => (
  <input className={`form-input type-${type}`} type={type} name={name} placeholder={placeholder} />
);

export default FormInput;