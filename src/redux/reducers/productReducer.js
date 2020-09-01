import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS:
      return state;

    case types.ADD_PRODUCT:
      return state;

    case types.DELETE_PRODUCT:
      return state;

    default:
      return state;
  }
};

export default productReducer;

// const numbers = [1, 2, 3];

// numbers.map((number) => console.log(number));
