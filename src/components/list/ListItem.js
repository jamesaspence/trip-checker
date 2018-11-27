import React from 'react';

const ConnectedListItem = ({ question }) => (
  <div className="answered-question">
    <h2>{question.question}</h2>
    <p>{question.packed ? 'PACKED' : 'NOT PACKED'}</p>
  </div>
);

export default ConnectedListItem;