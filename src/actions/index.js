export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const INCREMENT = 'INCREMENT';

export const answerPackedQuestion = (question, packed) => ({
  type: ANSWER_QUESTION,
  question,
  packed
});

export const incrementQuestion = () => ({ type: INCREMENT });