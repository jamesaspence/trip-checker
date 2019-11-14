import React from 'react';
import { Link } from 'react-router-dom';

import './TemplateItem.scss';

const TemplateItem = ({ name, items, id }) => (
  <Link
    to={`/pack/new/${id}`}
    className="template-item-link">
    <div className="template-item">
      <div className="template-item-image-container">
        <img className="image" src="https://via.placeholder.com/150" alt={`Template "${name}"`}/>
      </div>
      <div className="template-item-content">
        <h4 className="template-item-header">{name}</h4>
        <div className="subtext-container">
          <p className="subtext">{items.reduce((accumulator, item) => `${accumulator}, ${item}`)}</p>
          <span className="item-count">{`(${items.length})`}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default TemplateItem;