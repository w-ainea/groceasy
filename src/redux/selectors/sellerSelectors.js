import { createSelector } from "reselect";

const sellersSelector = (state) => state.sellers;

export const productsSelector = (state) => state.products;

export const allsellersSelector = createSelector(
  sellersSelector,
  (sellers) => sellers
);
