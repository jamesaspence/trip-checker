import React, { Component } from 'react';
import ItemInput from './ItemInput';

import './NewContainer.scss';

class NewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        'socks',
        'shoes'
      ]
    };

    this.onValChanged = this.onValChanged.bind(this);
  }

  onValChanged(key, newVal) {
    const items = [ ...this.state.items ];
    items[key] = newVal;

    this.setState({
      items
    });
  }

  render() {
    return (
      <div className="new-container full-container">
        <div className="form-wrap half-height-container">
          <h1>What do you need to pack today?</h1>
          <p>I need to pack...</p>
          <form className="new-items">
            { this.state.items.map((item, i) => <ItemInput key={i} onValChange={this.onValChanged} i={i} item={item} />) }
          </form>
        </div>
      </div>
    );
  }
}

export default NewContainer;