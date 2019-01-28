import { combineReducers } from 'redux';
import packing from './packing';
import auth from './auth';

const rootReducer = combineReducers({
  packing,
  auth
});

export default rootReducer;