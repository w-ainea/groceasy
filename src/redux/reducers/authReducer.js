import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export const authReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      });

    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: "",
      });

    case types.LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });

    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });

    default:
      return state;
  }
};
