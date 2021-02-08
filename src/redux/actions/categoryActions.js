import axios from "axios";
import * as types from "./actionTypes";

const baseUrl = process.env.REACT_APP_API_URL + "/categories";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export function receiveCategories(categories) {
  return {
    type: types.RECEIVE_CATEGORIES,
    payload: categories,
  };
}

export function loadCategoryItems(items) {
  return {
    type: types.LOAD_CATEGORY_ITEMS,
    items,
  };
}

// get a list of categories
export function fetchCategories() {
  return function (dispatch) {
    return axios(baseUrl + "/list", { method: "GET" })
      .then((categories) =>
        dispatch(receiveCategories(categories.data.categories))
      )
      .catch((err) => {
        throw err;
      });
  };
}
