import initialState from "./initialState";
import * as types from "../actions/actionTypes";
import { addItem } from "../actions/cartUtils";

const cartReducer = (state = initialState.cartItems, action) => {
  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      return addItem(state, action.payload);

    default:
      return state;
  }
};

export default cartReducer;
