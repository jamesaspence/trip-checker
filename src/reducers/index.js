import { combineReducers } from 'redux';
import packing from './packing';
import template from './template';

export const preLoadedState = {};

export default combineReducers({
  packing,
  template
});