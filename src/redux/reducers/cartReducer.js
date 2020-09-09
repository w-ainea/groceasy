import initialState from "./initialState";
import * as types from "../actions/actionTypes";
import { addItem, removeItem } from "./cartUtils";

const cartReducer = (state = initialState.cartItems, action) => {
  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      return addItem(state, action.payload);

    case types.REMOVE_ITEM_FROM_CART:
      return removeItem(state, action.payload);

    default:
      return state;
  }
};

export default cartReducer;
