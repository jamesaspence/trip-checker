import React from 'react';
import { connect } from 'react-redux';
import ListItem from './AnsweredQuestion';

const mapStateToProps = state => ({
  answeredQuestions: state.answeredQuestions
});

const AnsweredQuestionContainer = ({ answeredQuestions }) => {
  return (
    <div className="answered-question-container half-height-container">
      {answeredQuestions.map((question, i) => (<ListItem key={i} question={question}/>))}
    </div>
  );
};

export default connect(mapStateToProps)(AnsweredQuestionContainer);