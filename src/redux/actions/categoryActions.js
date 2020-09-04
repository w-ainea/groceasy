import * as types from "./actionTypes";
import * as categoriesApi from "../../api/categoriesApi";

export function fetchCategories() {
  return function (dispatch) {
    return categoriesApi
      .getCategories()
      .then((categories) => {
        dispatch(receiveCategories(categories));
      })
      .catch((err) => {
        throw err;
      });
  };
}

export function receiveCategories(categories) {
  return {
    type: types.RECEIVE_CATEGORIES,
    categories,
  };
}
