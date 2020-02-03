export const ANSWER_ITEM = 'ANSWER_ITEM';
export const INCREMENT = 'INCREMENT';
export const START_PACKING = 'START_PACKING';

export const answerItem = (index, packed) => ({
  type: ANSWER_ITEM,
  index,
  packed
});

export const incrementItem = () => ({ type: INCREMENT });

export const startPacking = items => ({
  type: START_PACKING,
  items
});