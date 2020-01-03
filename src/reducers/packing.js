import { ANSWER_ITEM, INCREMENT, START_PACKING } from '../actions/packing';

const initialState = {
  answeredItems: [],
  items: [],
  currentIndex: 0,
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ANSWER_ITEM:
      const { index, packed } = action;
      const { items } = state;

      if (items.length < index + 1) {
        return {
          ...state
        };
      }

      const modifiedItems = items.map((item, i) => {
        if (i === index && item.packed !== packed) {
          item.packed = packed;
        }

        return item
      });

      return {
        ...state,
        items: modifiedItems
      };
    case INCREMENT:
      const { currentIndex } = state;
      return {
        ...state,
        currentIndex: currentIndex + 1
      };
    case START_PACKING:
      return {
        ...state,
        items: action.items.map(name => ({
          name,
          packed: false
        }))
      };

    default:
      return {
        ...state
      };
  }
};