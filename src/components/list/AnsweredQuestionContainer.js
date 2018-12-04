import React from 'react';
import { connect } from 'react-redux';
import AnsweredQuestion from './AnsweredQuestion';
import './AnsweredQuestionContainer.scss';

const mapStateToProps = state => ({
  answeredQuestions: state.answeredQuestions
});

const AnsweredQuestionContainer = ({ answeredQuestions }) => {
  return (
    <div className="answered-question-container half-height-container">
      {answeredQuestions.map((question, i) => (<AnsweredQuestion key={i} question={question} index={i}/>))}
    </div>
  );
};

export default connect(mapStateToProps)(AnsweredQuestionContainer);