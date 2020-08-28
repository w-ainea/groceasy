import * as types from "./actionTypes";

const loadProducts = (products) => ({
  type: types.LOAD_PRODUCTS,
  payload: products,
});

const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  payload: product,
});

const deleteProduct = (product) => ({
  type: types.DELETE_PRODUCT,
  payload: product,
});

const modifyProduct = (product) => ({
  type: types.MODIFY_PRODUCT,
  payload: product,
});

export { loadProducts, addProduct, deleteProduct, modifyProduct };
