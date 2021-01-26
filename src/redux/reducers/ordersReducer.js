import * as types from "../actions/actionTypes";

import initialState from "./initialState";

const ordersReducer = (state = initialState.orders, action) => {
  switch (action.type) {
    case types.PLACE_ORDER:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default ordersReducer;