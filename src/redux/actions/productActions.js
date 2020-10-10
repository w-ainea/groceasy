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

export const addNewProduct = (product) => ({
  type: types.ADD_PRODUCT,
  payload: product,
});

export const editProduct = (product) => ({
  type: types.EDIT_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: types.UPDATE_PRODUCT,
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

export function saveProduct(product) {
  return function (dispatch) {
    return productsApi
      .saveProduct(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProduct(savedProduct))
          : dispatch(addNewProduct(savedProduct));
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
