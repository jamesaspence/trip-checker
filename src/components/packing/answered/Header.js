import React from 'react';

const renderHeader = text => (
  <div className="answered-item-header">
    <h2 className="header">
      {text}
    </h2>
  </div>
);

const Header = ({ answeredItems }) => {
  const numberOfUnpackedItems = answeredItems
    .filter(item => !item.packed)
    .length;

  let text = `👍 All good to go!! Safe travels.`;
  if (numberOfUnpackedItems > 0) {
    text = `😞 Not quite there. Only ${numberOfUnpackedItems} item${numberOfUnpackedItems > 1 ? 's' : ''} to pack!`;
  }

  return renderHeader(text);
};

export default Header;