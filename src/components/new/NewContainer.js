import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemInput from './ItemInput';
import { Redirect } from 'react-router-dom';
import { PACKING } from '../../util/routes';

import './NewContainer.scss';
import { startPacking } from '../../actions/packing';

const mapDispatchToProps = dispatch => ({
  startPacking: items => dispatch(startPacking(items))
});

class NewContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      focusedIndex: null,
      validationErrors: [],
      submitted: false
    };

    this.onValChanged = this.onValChanged.bind(this);
    this.onNewItem = this.onNewItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
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

  onSubmit() {
    const validated = this.validate();

    if (validated.length > 0) {
      this.setState({
        validationErrors: validated
      });
      return;
    }

    this.props.startPacking(this.state.items);
    this.setState({
      submitted: true
    });
  }

  validate() {
    const { items } = this.state;

    return items.map((item, i) => {
      if (item == null || item.trim() === '') {
        return i;
      }

      return null;
    }).filter(o => o != null);
  }

  render() {
    const { focusedIndex, items, submitted } = this.state;

    if (submitted) {
      return (
        <Redirect to={PACKING} />
      );
    }

    return (
      <div className="new-container full-container">
        <div className="form-wrap half-height-container">
          <h1>What do you need to pack today?</h1>
          <h3>I need to pack...</h3>
          <div className="new-items">
            { items.map((item, i) => <ItemInput key={i} focused={focusedIndex} onValChange={this.onValChanged} i={i} item={item} />) }
            <button className="new-item" type="button" onClick={this.onNewItem}>Add New</button>
            <button className="save-list" type="button" onClick={this.onSubmit}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(s => s, mapDispatchToProps)(NewContainer);