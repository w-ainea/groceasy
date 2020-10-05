import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const salesReducer = (state = initialState.sales, action) => {
  switch (action.type) {
    case types.RECEIVE_SALES_DATA:
      return action.payload;

    default:
      return state;
  }
};

export default salesReducer;
