import { combineReducers } from 'redux';
import packing from './packing';
import auth, { preLoadedState as authPreLoaded } from './auth';
import template from './template';
import { LOGOUT } from '../actions/auth';

const appReducer = combineReducers({
  packing,
  auth,
  template
});

const rootReducer = (state, action) => {
  const { type } = action;

  if (type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export const preLoadedState = {
  auth: authPreLoaded
};

export default rootReducer;