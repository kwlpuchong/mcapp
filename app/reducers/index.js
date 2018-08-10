import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AppStateReducer from './AppStateReducer';

export default combineReducers({
  auth: AuthReducer,
  appstate: AppStateReducer
});
