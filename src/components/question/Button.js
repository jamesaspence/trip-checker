import React from 'react';
import './Button.scss';

export default ({buttonClass, text, onClick}) => (
    <a href="#" className={`button ${buttonClass}`}>{text}</a>
);