import { ANSWER_QUESTION, INCREMENT } from '../actions';

import questions from '../questions.json';

const initialState = {
  answeredQuestions: [],
  questions: questions,
  currentIndex: 0
};

export default (state = initialState, action) => {
  const { type, ...rest } = action;
  switch (type) {
    case ANSWER_QUESTION:
      const { answeredQuestions } = state;
      answeredQuestions.push(rest);
      return Object.assign({}, state, { answeredQuestions });
    case INCREMENT:
      const { currentIndex } = state;
      return Object.assign({}, state, {
        currentIndex: currentIndex + 1
      });
    default:
      return state;
  }
};