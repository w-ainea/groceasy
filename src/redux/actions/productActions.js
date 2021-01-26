import * as types from "./actionTypes";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL + "/products";

export const requestProducts = (products) => ({
  type: types.REQUEST_PRODUCTS,
  payload: products,
});

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  payload: products,
});

export function fetchProductsError(error) {
  return {
    type: types.FETCH_PRODUCTS_ERROR,
    payload: error,
  };
}

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

export function fetchProducts(products) {
  return function (dispatch) {
    dispatch(requestProducts(products));
    return fetch(baseUrl + "/list", { method: "GET" })
      .then((response) => response.json())
      .then((products) => dispatch(receiveProducts(products)))
      .catch((err) => {
        throw err;
      });
  };
}

export function saveProduct(product) {
  return function (dispatch) {
    return fetch(baseUrl + "/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_name: product.name,
        price: product.price,
        category: product.category,
        quantity: product.quantity,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((product) =>
        product.id
          ? dispatch(updateProduct(product))
          : dispatch(addNewProduct(product))
      )
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteProductOptimistic(product) {
  return async function (dispatch) {
    let resp = await axios.delete(`${baseUrl}/delete/${product.id}`);
    dispatch(receiveProducts(resp.data));
  };
}
