import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from './types';
import NavigationService from '../service/NavigationService';
import { fetchAccessToken } from '../util/auth';

const loginUserFail = dispatch => {
  console.log('delivering action LOGIN_USER_FAIL:');
  dispatch({
    type: LOGIN_USER_FAIL
  });
};

const loginUserSuccess = dispatch => {
  dispatch({
    type: LOGIN_USER_SUCCESS
  });
};

export const loginUser = (username, password) => {
  return dispatch => {
    console.log('delivering action LOGIN_USER[]:' + username + ',' + password);
    dispatch({ type: LOGIN_USER });
    if (username == 'Admin') {
      fetchAccessToken(username, password);
      loginUserSuccess(dispatch);
      NavigationService.navigate('App');
    } else loginUserFail(dispatch);
  };
};
