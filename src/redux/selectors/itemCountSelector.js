import { createSelector } from "reselect";

const allItemsSelector = (state) => state.cart;

export const cartItemTotalSelector = createSelector(allItemsSelector, (items) =>
  items.reduce((currentTotal, item) => currentTotal + item.quantity, 0)
);
