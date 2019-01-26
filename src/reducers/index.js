import { ANSWER_QUESTION, INCREMENT, TOGGLE_CHECKBOX } from '../actions';
import { LOGIN_SUCCESS } from '../actions/auth';

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
      return {
        ...state,
        answeredQuestions: [...answeredQuestions, rest]
      };
    case INCREMENT:
      const { currentIndex } = state;
      return {
        ...state,
        currentIndex: currentIndex + 1
      };
    case TOGGLE_CHECKBOX:
      let modifiedQuestions = state.answeredQuestions
        .map(question => {
          if (question.text === rest.question) {
            question.packed = rest.packed;
          }

          return question;
        });
      return {
        ...state,
        answeredQuestions: modifiedQuestions
      };
    case LOGIN_SUCCESS:
      const { user, token } = rest;
      return {
        token,
        user,
        ...state
      };

    default:
      return state;
  }
};