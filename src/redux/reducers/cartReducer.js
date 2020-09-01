import initialState from "./initialState";
import * as types from "../actions/actionTypes";

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SHOW_CART:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
