import React from 'react';
import Checkbox from './Checkbox';
import './AnsweredQuestion.scss';

const AnsweredQuestion = ({ question, index }) => (
  <div className="answered-question">
    <Checkbox checked={question.packed} index={index} />
    <div className="text-container">
      <p className="text">{question.text}</p>
    </div>
  </div>
);

export default AnsweredQuestion;