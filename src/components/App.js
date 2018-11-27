import React from 'react';
import QuestionContainer from './question/QuestionContainer';
import AnsweredQuestionContainer from './list/AnsweredQuestionContainer';
import { connect } from 'react-redux';

import './App.scss';

const mapStateToProps = state => ({
  questions: state.questions,
  currentIndex: state.currentIndex
});

const ConnectedApp = ({ questions, currentIndex }) => {
  return (
    <div className="app">
      <QuestionContainer/>
      <AnsweredQuestionContainer/>
    </div>
  );
};

export default connect(mapStateToProps)(ConnectedApp);