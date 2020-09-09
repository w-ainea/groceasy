import { createSelector } from "reselect";

const allItemsSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [allItemsSelector],
  (cart) => cart
);

export const cartItemTotalSelector = createSelector(
  [allItemsSelector],
  (items) =>
    items.reduce((currentTotal, item) => currentTotal + item.quantity, 0)
);

export const cartItemPriceSelector = createSelector(
  [allItemsSelector],
  (items) =>
    items.reduce(function (currentTotal, item) {
      return currentTotal + item.quantity * item.price;
    }, 0)
);
