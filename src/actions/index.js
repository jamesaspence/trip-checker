export const ANSWER_QUESTION = "ANSWER_QUESTION";

export const answerPackedQuestion = (question, packed) => (
    {
        type: ANSWER_QUESTION,
        question,
        packed
    }
);