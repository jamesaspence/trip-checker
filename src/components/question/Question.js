import React, {Component} from 'react';
import Button from './Button';

import './Question.scss';

class Question extends Component {
  render() {
    return (
      <div className="question-container">
        <h1 className="question">
          {this.props.question}
        </h1>
        <div className="buttons-container">
          <Button buttonClass="yes" text="Yep!" onClick={this.props.onAnswer}/>
          <Button buttonClass="no" text="S#&@" onClick={this.props.onAnswer}/>
        </div>
      </div>
    );
  }
}

export default Question;
