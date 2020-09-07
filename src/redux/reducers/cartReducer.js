import initialState from "./initialState";
import * as types from "../actions/actionTypes";

const cartReducer = (state = initialState.cartItems, action) => {
  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default cartReducer;
