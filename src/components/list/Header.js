import React from 'react';

const renderHeader = text => (
  <div className="answered-questions-header">
    <h2 className="header">
      {text}
    </h2>
  </div>
);

const Header = ({ answeredQuestions }) => {
  const numberOfUnpackedItems = answeredQuestions
    .filter(question => !question.packed)
    .length;

  let text = `👍 All good to go!! Safe travels.`;
  if (numberOfUnpackedItems > 0) {
    text = `😞 Not quite there. Only ${numberOfUnpackedItems} item${numberOfUnpackedItems > 1 ? 's' : ''} to pack!`;
  }

  return renderHeader(text);
};

export default Header;