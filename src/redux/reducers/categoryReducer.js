import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { loadProducts } from "./categoryUtils";

const categoryReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case types.RECEIVE_CATEGORIES:
      return action.payload;

    case types.LOAD_CATEGORY_ITEMS:
      return {
        ...state,
        categoryItems: loadProducts(state, action.items),
      };

    default:
      return state;
  }
};

export default categoryReducer;
