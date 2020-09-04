import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const categoryReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case types.RECEIVE_CATEGORIES:
      return action.categories;

    default:
      return state;
  }
};

export default categoryReducer;
