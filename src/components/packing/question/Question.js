import React from 'react';
import Button from './Button';

import './Question.scss';

const Question = ({ question, onYes, onNo }) => (
  <div className="question">
    <h1 className="question-text">
      {question}
    </h1>
    <div className="buttons-container">
      <Button buttonClass="yes" text="Yep!" onClick={onYes}/>
      <Button buttonClass="no" text="S#&@" onClick={onNo}/>
    </div>
  </div>
);

export default Question;