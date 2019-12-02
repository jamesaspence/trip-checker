import { ANSWER_QUESTION, INCREMENT, TOGGLE_CHECKBOX, START_PACKING } from '../actions/packing';

const initialState = {
  answeredQuestions: [],
  questions: [],
  currentIndex: 0,
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
    case START_PACKING:
      return {
        ...state,
        questions: action.items
      };

    default:
      return {
        ...state
      };
  }
};