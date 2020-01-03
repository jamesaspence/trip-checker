import React from 'react';
import ItemContainer from './item/ItemContainer';
import AnsweredItemContainer from './answered/AnsweredItemContainer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { HOME } from '../../util/routes';

import './PackContainer.scss';

const mapStateToProps = state => ({
  items: state.packing.items,
  currentIndex: state.packing.currentIndex,
  answeredItems: state.packing.answeredItems
});

const ConnectedPackContainer = ({ items, answeredItems, currentIndex }) => {
  if (items.length < 1) {
    return <Redirect to={HOME} />
  }

  return (
    <div className="pack-container full-container">
      {items.length > currentIndex ? (<ItemContainer/>) : ''}
      {answeredItems.length > 0 ? (<AnsweredItemContainer/>) : ''}
    </div>
  );
};

export default connect(mapStateToProps)(ConnectedPackContainer);