import React, { Component } from 'react';

import './ItemInput.scss';

class ItemInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onRef = this.onRef.bind(this);
  }

  onChange(e) {
    const { onValChange, i } = this.props;
    onValChange(i, e.target.value);
  }

  onRef(component) {
    if (component == null) {
      return;
    }

    const { focused, i } = this.props;

    if (focused == null) {
      return;
    }

    if (i === focused) {
      component.focus();
    }
  }

  render() {
    const { i, item, validationError } = this.props;

    return (
      <label htmlFor={`itemInput--${i}`} className="item-input">
        <input type="text" id={`itemInput--${i}`} onChange={this.onChange} ref={this.onRef} className={`item-input-inner ${validationError ? 'validate-error' : ''}`} placeholder="...?" value={item}/>
      </label>
    )
  }
}

export default ItemInput;