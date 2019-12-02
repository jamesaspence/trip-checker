import React, { Component } from 'react';
import ItemInput from './ItemInput';

import './NewContainer.scss';

class NewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      focusedIndex: null
    };

    this.onValChanged = this.onValChanged.bind(this);
    this.onNewItem = this.onNewItem.bind(this);
  }

  onValChanged(key, newVal) {
    const items = [ ...this.state.items ];
    items[key] = newVal;

    this.setState({
      items,
      focusedIndex: null
    });
  }

  onNewItem() {
    const { items, ...rest } = this.state;
    items.push('');
    const focusedIndex = items.length - 1;
    this.setState({
      ...rest,
      items,
      focusedIndex
    })
  }

  render() {
    const { focusedIndex, items } = this.state;
    return (
      <div className="new-container full-container">
        <div className="form-wrap half-height-container">
          <h1>What do you need to pack today?</h1>
          <h3>I need to pack...</h3>
          <div className="new-items">
            { items.map((item, i) => <ItemInput key={i} focused={focusedIndex} onValChange={this.onValChanged} i={i} item={item} />) }
            <button className="new-item" type="button" onClick={this.onNewItem}>Add New</button>
            <button className="save-list" type="button">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewContainer;