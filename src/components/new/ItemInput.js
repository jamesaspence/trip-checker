import React, { Component } from 'react';

import './ItemInput.scss';

class ItemInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { onValChange, i } = this.props;
    onValChange(i, e.target.value);
  }

  render() {
    const { i, item } = this.props;

    return (
      <label htmlFor={`itemInput--${i}`} className="item-input">
        <input type="text" id={`itemInput--${i}`} onChange={this.onChange} className="item-input-inner" placeholder="...?" value={item}/>
      </label>
    )
  }
}

export default ItemInput;