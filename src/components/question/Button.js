import React from 'react';
import './Button.scss';

export default ({buttonClass, text, onClick}) => (
    <a href="#" className={`button ${buttonClass}`} onClick={onClick}>{text}</a>
);