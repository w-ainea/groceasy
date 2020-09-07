import * as types from "./actionTypes";

export const addProductToCart = (product) => ({
  type: types.ADD_ITEM_TO_CART,
  payload: product,
});

export const showCartItems = (products) => ({
  type: types.SHOW_CART_ITEMS,
  payload: products,
});
