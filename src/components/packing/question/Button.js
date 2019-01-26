import React from 'react';
import './Button.scss';

export default ({buttonClass, text, onClick}) => (
    <button className={`button ${buttonClass}`} onClick={onClick}>{text}</button>
);