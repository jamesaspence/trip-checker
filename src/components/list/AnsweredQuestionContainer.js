import React from 'react';
import { connect } from 'react-redux';

import Checklist from './Checklist';

const mapStateToProps = state => ({
  answeredQuestions: state.answeredQuestions
});

const AnsweredQuestionContainer = ({ answeredQuestions }) => (
  <div className="answered-question-container half-height-container">
    <Checklist questions={answeredQuestions} />
  </div>
);

export default connect(mapStateToProps)(AnsweredQuestionContainer);