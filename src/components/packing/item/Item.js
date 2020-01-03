import React from 'react';
import Button from './Button';

import './Item.scss';

const Item = ({ item, onYes, onNo }) => (
  <div className="item">
    <div className="item-text">
      <h1>Did your pack your...</h1>
      <h2 className="packed-item">
        {item.name}?
      </h2>
    </div>
    <div className="buttons-container">
      <Button buttonClass="yes" text="Yep!" onClick={onYes}/>
      <Button buttonClass="no" text="S#&@" onClick={onNo}/>
    </div>
  </div>
);

export default Item;