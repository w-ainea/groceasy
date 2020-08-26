import { products as productState } from "./initialState";
import * as types from "../actions/actionTypes";

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return state;

    case types.ADD_PRODUCTS:
      return state;

    case types.DELETE_PRODUCTS:
      return state;

    default:
      return state;
  }
};

export default productReducer;
