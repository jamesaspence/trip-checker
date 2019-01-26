import React from 'react';

import './FormInput.scss';

const FormInput = ({ error, onChange, ...rest }) => {
  const { type, name } = rest;
  const id = `auth-form-${name}`;
  return (
    <label htmlFor={id} className="auth-form-error">
      <input className={`form-input type-${type}`} onChange={event => onChange(name, event.target.value)} {...rest} />
      {error ? 'Please fix this field and try again.' : ''}
    </label>
  );
};

export default FormInput;