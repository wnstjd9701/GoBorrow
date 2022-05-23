import { combineReducers } from 'redux';
import user from './user_reducer.js';
import organization from './organization_reducer.js';

const rootReducer = combineReducers({
  user,
  customization: organization,
});

export default rootReducer;
