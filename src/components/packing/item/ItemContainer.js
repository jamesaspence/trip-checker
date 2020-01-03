import { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';

import { answerItem, incrementItem } from '../../../actions/packing';
import React from 'react';

const mapStateToProps = state => ({
  items: state.packing.items,
  currentIndex: state.packing.currentIndex
});

const mapDispatchToProps = dispatch => ({
  answerItem: (item, packed) => dispatch(answerItem(item, packed)),
  increment: () => dispatch(incrementItem())
});

class ItemContainer extends Component {
  constructor(props) {
    super(props);

    this.onYes = this.onYes.bind(this);
    this.onNo = this.onNo.bind(this);
    this.getCurrentItem = this.getCurrentItem.bind(this);
    this.onAnsweredItem = this.onAnsweredItem.bind(this);
  }

  onYes() {
    this.onAnsweredItem(true);
  }

  onNo() {
    this.onAnsweredItem(false);
  }

  onAnsweredItem(packed) {
    this.props.answerItem(this.getCurrentItem(), packed);
    this.props.increment();
  }

  getCurrentItem() {
    const { items, currentIndex } = this.props;

    if (currentIndex >= items.length) {
      return null;
    }

    return items[currentIndex];
  }

  render() {
    return (
      <div className="item-container half-height-container">
        <Item item={this.getCurrentItem()} onYes={this.onYes} onNo={this.onNo}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);