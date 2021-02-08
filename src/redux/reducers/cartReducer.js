import initialState from "./initialState";
import * as types from "../actions/actionTypes";
import { addItem, removeItem, subtractCartItem } from "./cartUtils";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // add an item to the cart
    case types.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };

    case types.SUBTRACT_CART_ITEM:
      return {
        ...state,
        cartItems: subtractCartItem(state.cartItems, action.payload),
      };

    case types.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
