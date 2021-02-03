import * as types from "./actionTypes";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL + "/auth";

export const requestLogin = (email, password) => ({
  type: types.REQUEST_LOGIN,
  isFetching: true,
  isAuthenticated: false,
  payload: {
    email,
    password,
  },
});

export const receiveLogin = (user) => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  payload: user.data.response,
});

export const loginError = (message) => ({
  type: types.LOGIN_ERROR,
  isFetching: false,
  isAuthenticated: false,
  message,
});

// sign up

export const requestSignUp = (username, email, password) => ({
  type: types.REQUEST_REGISTER,
  isFetching: true,
  isAuthenticated: false,
  payload: {
    username,
    email,
    password,
  },
});

export const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  payload: user,
});

export const registerError = (message) => ({
  type: types.REGISTER_ERROR,
  isFetching: false,
  isAuthenticated: false,
  message,
});

// logout
export const requestLogout = () => {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
};

export const receiveLogout = () => {
  return {
    type: types.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
};

export const requestUser = (user) => {
  return {
    type: types.RECEIVE_USER,
    payload: user,
  };
};

export const receiveUser = (user) => {
  return {
    type: types.RECEIVE_USER,
    payload: user.data[0],
  };
};

// async functions

// login
export function loginUser(email, password) {
  return function (dispatch) {
    dispatch(requestLogin(email, password));
    return axios(baseUrl + "/signin", {
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((user) => dispatch(receiveLogin(user)))
      .catch((err) => dispatch(loginError(err)));
  };
}

// signup
export function registerUser(username, email, password) {
  return function (dispatch) {
    dispatch(requestSignUp(username, email, password));
    return fetch(baseUrl + "/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((result) => result.json())
      .then((response) => dispatch(registerSuccess(response)))
      .catch((err) => dispatch(registerError(err)));
  };
}

// logout
export const logout = () => {
  return function (dispatch) {
    dispatch(requestLogout());
    dispatch(receiveLogout());
  };
};

// fetch a user by id
export const fetchUser = (id, token) => {
  return function (dispatch) {
    dispatch(requestUser(id));
    return axios(`${baseUrl}/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then(console.log())
      .then((user) => dispatch(receiveUser(user)));
  };
};
