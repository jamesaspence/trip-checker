import { ANSWER_ITEM, INCREMENT, TOGGLE_CHECKBOX, START_PACKING } from '../actions/packing';

const initialState = {
  answeredItems: [],
  items: [],
  currentIndex: 0,
};

export default (state = initialState, action) => {
  const { type, ...rest } = action;
  switch (type) {
    case ANSWER_ITEM:
      const { answeredItems } = state;
      return {
        ...state,
        answeredItems: [...answeredItems, rest]
      };
    case INCREMENT:
      const { currentIndex } = state;
      return {
        ...state,
        currentIndex: currentIndex + 1
      };
    case TOGGLE_CHECKBOX:
      let modifiedItems = state.answeredItems
        .map(item => {
          if (item.text === rest.item) {
            item.packed = rest.packed;
          }

          return item;
        });
      return {
        ...state,
        answeredItems: modifiedItems
      };
    case START_PACKING:
      return {
        ...state,
        items: action.items
      };

    default:
      return {
        ...state
      };
  }
};