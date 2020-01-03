export const ANSWER_ITEM = 'ANSWER_ITEM';
export const INCREMENT = 'INCREMENT';
export const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX';
export const START_PACKING = 'START_PACKING';

export const answerItem = (text, packed) => ({
  type: ANSWER_ITEM,
  text,
  packed
});

export const incrementItem = () => ({ type: INCREMENT });

export const startPacking = items => ({
  type: START_PACKING,
  items
});

export const toggleCheckbox = (item, packed) => ({
  type: TOGGLE_CHECKBOX,
  item,
  packed
});