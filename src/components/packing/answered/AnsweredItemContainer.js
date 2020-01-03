import React from 'react';
import { connect } from 'react-redux';
import AnsweredItem from './AnsweredItem';
import Header from './Header';
import './AnsweredItemContainer.scss';

const mapStateToProps = state => ({
  items: state.packing.items,
  currentIndex: state.packing.currentIndex
});

const AnsweredItemContainer = ({ items, currentIndex }) => {
  const answeredItems = items.slice(0, currentIndex);
  console.log('items', items);
  console.log('answered', answeredItems);
  console.log('index', currentIndex);

  return (
    <div className="answered-item-container half-height-container">
      { items.length === answeredItems.length ? (<Header answeredItems={answeredItems} />) : '' }
      <div className="item-list">
        {answeredItems.map((item, i) => (<AnsweredItem key={i} item={item} index={i}/>))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(AnsweredItemContainer);