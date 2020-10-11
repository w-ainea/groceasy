import * as types from "./actionTypes";
// import * as categoriesApi from "../../api/categoriesApi";

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
export function fetchCategories() {
  return function (dispatch) {
    return fetch(baseUrl + "/list", { method: "GET" })
      .then((response) => response.json())
      .then((categories) => dispatch(receiveCategories(categories)))
      .catch((err) => {
        throw err;
      });
  };
}
