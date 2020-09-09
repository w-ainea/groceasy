import * as types from "./actionTypes";

export function addProductToCart(product) {
  return {
    type: types.ADD_ITEM_TO_CART,
    payload: product,
  };
}

export const showCartItems = (products) => ({
  type: types.SHOW_CART_ITEMS,
  payload: products,
});

export const removeCartItem = (product) => ({
  type: types.REMOVE_ITEM_FROM_CART,
  payload: product,
});
