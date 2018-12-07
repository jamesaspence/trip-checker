export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const INCREMENT = 'INCREMENT';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';

export const answerPackedQuestion = (text, packed) => ({
  type: ANSWER_QUESTION,
  text,
  packed
});

export const incrementQuestion = () => ({ type: INCREMENT });

export const toggleCheckbox = (question, packed) => ({
  type: TOGGLE_CHECKBOX,
  question,
  packed
});