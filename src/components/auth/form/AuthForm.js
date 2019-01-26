import React  from 'react';

import './AuthForm.scss';

const AuthForm = ({ active, header, children }) => (
  <div className={`auth-form ${active ? `active` : ``}`}>
    <h3>{header}</h3>
    {children}
  </div>
);

export default AuthForm;
