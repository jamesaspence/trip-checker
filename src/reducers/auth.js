import {LOGIN_SUCCESS, LOGOUT, VALIDATE_FORM} from '../actions/auth';
import { getUser, getToken } from '../util/localStorage';

const initialState = {
  user: getUser(),
  token: getToken(),
  validation: {}
};

export default (state = initialState, action) => {
  const { type, ...rest } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      const { user, token } = rest;
      return {
        ...state,
        token,
        user
      };
    case LOGOUT:
      console.log(initialState);
      return {
        ...initialState,
        user: undefined,
        token: undefined
      };
    case VALIDATE_FORM:
      const { name, errors } = rest;
      let validation = {
        ...state.validation
      };

      validation[name] = errors;

      return {
        ...state,
        validation
      };

    default:
      return {
        ...state
      };
  }
};

