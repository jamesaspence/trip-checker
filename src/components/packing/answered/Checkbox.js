import React from 'react';
import './Checkbox.scss';

const Checkbox = ({ checked, index, onChange }) => (
  <div className="checkbox-container">
    <input className="packed-toggle" type="checkbox" id={`item-${index + 1}`} onChange={onChange} checked={checked}/>
    <label className="packed-toggle-label" htmlFor={`item-${index + 1}`}/>
  </div>
);

export default Checkbox;