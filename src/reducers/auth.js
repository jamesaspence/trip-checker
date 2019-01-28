import {LOGIN_SUCCESS, LOGOUT, VALIDATE_FORM} from '../actions/auth';
import { getUser, getToken } from '../util/localStorage';

const initialState = {
  user: undefined,
  token: undefined,
  validation: {}
};

export const preLoadedState = {
  ...initialState,
  user: getUser(),
  token: getToken()
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

