import * as types from "../actions/actionTypes";
import { removeItem } from "./cartUtils";
import initialState from "./initialState";

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return action.payload;

    case types.DELETE_PRODUCT:
      return removeItem(state, action.payload);

    case types.ADD_PRODUCT:
      return [...state, action.payload];

    case types.EDIT_PRODUCT:
      return [...state, action.payload];

    case types.UPDATE_PRODUCT:
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );

    default:
      return state;
  }
};

export default productReducer;