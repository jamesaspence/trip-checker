export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const INCREMENT = 'INCREMENT';

export const answerPackedQuestion = (text, packed) => ({
  type: ANSWER_QUESTION,
  text,
  packed
});

export const incrementQuestion = () => ({ type: INCREMENT });