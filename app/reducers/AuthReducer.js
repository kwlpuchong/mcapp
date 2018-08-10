import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS
} from '../actions/types';

const DESC_LOGIN_DEFAULT = 'Please enter your CACS ID and Password to log in.';
const DESC_LOGIN_FAILED = 'ID/Password incorrect.';

const INITIAL_AUTH_STATE = {
  desc: DESC_LOGIN_DEFAULT,
  isAuthenticated: false
};

const AuthReducer = (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return state;
    case LOGIN_USER_FAIL:
      return {
        ...state,
        desc: DESC_LOGIN_FAILED,
        isAuthenticated: false
      };
    case LOGIN_USER_SUCCESS:
      return { ...state, desc: DESC_LOGIN_DEFAULT, isAuthenticated: true };
    default:
      return state;
  }
};

export default AuthReducer;
