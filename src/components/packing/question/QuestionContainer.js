import { Component } from 'react';
import Question from './Question';
import { connect } from 'react-redux';

import { answerPackedQuestion, incrementQuestion } from '../../../actions';
import React from 'react';

const mapStateToProps = state => ({
  questions: state.packing.questions,
  currentIndex: state.packing.currentIndex
});

const mapDispatchToProps = dispatch => ({
  answerQuestion: (question, packed) => dispatch(answerPackedQuestion(question, packed)),
  increment: () => dispatch(incrementQuestion())
});

class QuestionContainer extends Component {
  constructor(props) {
    super(props);

    this.onYes = this.onYes.bind(this);
    this.onNo = this.onNo.bind(this);
    this.getCurrentQuestion = this.getCurrentQuestion.bind(this);
    this.onAnsweredQuestion = this.onAnsweredQuestion.bind(this);
  }

  onYes() {
    this.onAnsweredQuestion(true);
  }

  onNo() {
    this.onAnsweredQuestion(false);
  }

  onAnsweredQuestion(packed) {
    this.props.answerQuestion(this.getCurrentQuestion(), packed);
    this.props.increment();
  }

  getCurrentQuestion() {
    const { questions, currentIndex } = this.props;

    if (currentIndex >= questions.length) {
      return null;
    }

    return questions[currentIndex];
  }

  render() {
    return (
      <div className="question-container half-height-container">
        <Question question={this.getCurrentQuestion()} onYes={this.onYes} onNo={this.onNo}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);