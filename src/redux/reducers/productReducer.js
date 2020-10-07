import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return action.payload;

    case types.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.id);

    default:
      return state;
  }
};

export default productReducer;
