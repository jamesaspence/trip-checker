import { Component } from 'react';
import React from 'react';
import Checkbox from './Checkbox';
import './AnsweredItem.scss';
import { answerItem } from '../../../actions/packing';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  answerItem: (index, packed) => dispatch(answerItem(index, packed))
});

class AnsweredItem extends Component {
  constructor(props) {
    super(props);

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox() {
    const { index, item } = this.props;
    this.props.answerItem(index, !item.packed);
  }

  render() {
    const { item, index } = this.props;

    return (
      <div className="answered-item">
        <Checkbox checked={item.packed} onChange={this.toggleCheckbox} index={index} />
        <div className="text-container" onClick={this.toggleCheckbox}>
          <p className="text">{item.name}</p>
        </div>
      </div>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(AnsweredItem);