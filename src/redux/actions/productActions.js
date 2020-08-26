import * as types from "./actionTypes";

const loadProducts = (products) => {
  return {
    type: types.LOAD_PRODUCTS,
    payload: products,
  };
};

export { loadProducts };
