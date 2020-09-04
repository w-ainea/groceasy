import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const sellerReducer = (state = initialState.sellers, action) => {
  switch (action.type) {
    case types.RECEIVE_SELLERS:
      return action.sellers;

    default:
      return state;
  }
};

export default sellerReducer;
