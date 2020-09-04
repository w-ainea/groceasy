import * as types from "./actionTypes";
import * as productsApi from "../../api/productsApi";

export function fetchProducts() {
  return function (dispatch) {
    return productsApi
      .getProducts()
      .then((products) => {
        dispatch(receiveProducts(products));
      })
      .catch((err) => {
        throw err;
      });
  };
}

export function fetchProductsError(error) {
  return {
    type: types.FETCH_PRODUCTS_ERROR,
    payload: error,
  };
}

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  payload: products,
});
