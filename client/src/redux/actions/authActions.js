import * as types from "./actionTypes";

export const requestLogin = (credentials) => ({
  type: types.REQUEST_LOGIN,
  isFetching: true,
  isAuthenticated: false,
  credentials,
});

export const receiveLogin = (user) => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
});

export const loginError = (message) => ({
  type: types.LOGIN_ERROR,
  isFetching: false,
  isAuthenticated: false,
  message,
});

// async function
export function loginUser(credentials) {
  return function (dispatch) {
    dispatch(requestLogin(credentials));
  };
}
