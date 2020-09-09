import { createSelector } from "reselect";

const productsSelector = (state) => state.products;

export const allProductsSelector = createSelector(
  productsSelector,
  (products) => products
);
