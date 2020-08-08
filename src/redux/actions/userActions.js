import * as types from "./constants";

export const setCurrentUser = (user) => ({
  type: types.SET_CURRENT_USER,
  payload: user,
});
