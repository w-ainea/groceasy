import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export const authReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        credentials: action.creds,
      });

    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        credentials: action.payload,
      });

    case types.LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });

    case types.RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        credentials: action.payload,
      });

    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        isFetching: false,
        // credentials: {},
      });

    default:
      return state;
  }
};
