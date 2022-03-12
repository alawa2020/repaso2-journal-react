import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { notesReducer } from './notesReducer';
import { uiAuthReducer } from './uiAuthReducer';

export const reducers = combineReducers({
  auth: authReducer,
  uiAuth: uiAuthReducer,
  notes: notesReducer,
});
