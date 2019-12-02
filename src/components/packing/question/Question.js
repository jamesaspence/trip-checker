import React from 'react';
import Button from './Button';

import './Question.scss';

const Question = ({ question, onYes, onNo }) => (
  <div className="question">
    <div className="question-text">
      <h1>Did your pack your...</h1>
      <h2 className="packed-item">
        {question}?
      </h2>
    </div>
    <div className="buttons-container">
      <Button buttonClass="yes" text="Yep!" onClick={onYes}/>
      <Button buttonClass="no" text="S#&@" onClick={onNo}/>
    </div>
  </div>
);

export default Question;