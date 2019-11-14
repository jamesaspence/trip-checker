import { GET_TEMPLATES_SUCCESS } from '../actions/template';

const initialState = {
  templates: []
};

export default (state = initialState, action) => {
  const { type, ...rest } = action;
  switch (type) {
    case GET_TEMPLATES_SUCCESS:
      const { templates } = rest;
      return {
        ...state,
        templates
      };

    default:
      return {
        ...state
      };
  }
};

