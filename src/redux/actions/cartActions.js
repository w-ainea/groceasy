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
