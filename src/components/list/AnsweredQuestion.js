import React from 'react';
import './AnsweredQuestion.scss';

const AnsweredQuestion = ({ question }) => (
  <div className="answered-question">
    <h2>{question.text}</h2>
    <p>{question.packed ? 'PACKED' : 'NOT PACKED'}</p>
  </div>
);

export default AnsweredQuestion;