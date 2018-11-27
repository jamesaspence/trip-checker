import React from 'react';
import ListItem from './ListItem';

const Checklist = ({ questions }) => (
  <div className="checklist">
    {questions.map((question, i) => (<ListItem key={i} question={question}/>))}
  </div>
);

export default Checklist;