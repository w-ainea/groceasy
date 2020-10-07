import * as types from "./actionTypes";
import * as productsApi from "../../api/productsApi";

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

export const deleteProduct = (product) => ({
  type: types.DELETE_PRODUCT,
  payload: product,
});

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

export function deleteProductOptimistic() {
  return function (dispatch) {
    return productsApi
      .deleteProduct()
      .then(function (product) {
        dispatch(deleteProduct(product));
      })
      .catch(function (err) {
        throw err;
      });
  };
}
