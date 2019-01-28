import React from 'react';
import QuestionContainer from './question/QuestionContainer';
import AnsweredQuestionContainer from './list/AnsweredQuestionContainer';
import { connect } from 'react-redux';

import './PackContainer.scss';

const mapStateToProps = state => ({
  questions: state.packing.questions,
  currentIndex: state.packing.currentIndex,
  answeredQuestions: state.packing.answeredQuestions
});

const ConnectedPackContainer = ({ questions, answeredQuestions, currentIndex }) => {
  return (
    <div className="pack-container full-container">
      {questions.length > currentIndex ? (<QuestionContainer/>) : ''}
      {answeredQuestions.length > 0 ? (<AnsweredQuestionContainer/>) : ''}
    </div>
  );
};

export default connect(mapStateToProps)(ConnectedPackContainer);