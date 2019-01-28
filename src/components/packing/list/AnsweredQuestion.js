import { Component } from 'react';
import React from 'react';
import Checkbox from './Checkbox';
import './AnsweredQuestion.scss';
import { toggleCheckbox } from '../../../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  toggleCheckbox: (question, packed) => dispatch(toggleCheckbox(question, packed))
});

class AnsweredQuestion extends Component {
  constructor(props) {
    super(props);

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox() {
    const { question } = this.props;
    this.props.toggleCheckbox(question.text, !question.packed);
  }

  render() {
    const { question, index } = this.props;

    return (
      <div className="answered-question">
        <Checkbox checked={question.packed} onChange={this.toggleCheckbox} index={index} />
        <div className="text-container" onClick={this.toggleCheckbox}>
          <p className="text">{question.text}</p>
        </div>
      </div>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(AnsweredQuestion);