import React from 'react';
import { connect } from 'react-redux';
import AnsweredQuestion from './AnsweredQuestion';
import Header from './Header';
import './AnsweredQuestionContainer.scss';

const mapStateToProps = state => ({
  questions: state.questions,
  answeredQuestions: state.answeredQuestions
});

const AnsweredQuestionContainer = ({ questions, answeredQuestions }) => {
  return (
    <div className="answered-question-container half-height-container">
      { questions.length === answeredQuestions.length ? (<Header answeredQuestions={answeredQuestions} />) : '' }
      <div className="question-list">
        {answeredQuestions.map((question, i) => (<AnsweredQuestion key={i} question={question} index={i}/>))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(AnsweredQuestionContainer);