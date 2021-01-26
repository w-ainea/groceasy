import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const shopReducer = (state = initialState.shops, action) => {
  switch (action.type) {
    case types.RETRIEVE_SHOP:
      return action.payload;

    case types.RECIEVE_SHOP:
      return action.payload;

    case types.ADD_SHOP:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default shopReducer;
