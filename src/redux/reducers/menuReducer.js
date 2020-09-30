import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const menuReducer = (state = initialState.hidden, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default menuReducer;
