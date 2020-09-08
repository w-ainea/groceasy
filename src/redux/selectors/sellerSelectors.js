import { createSelector } from "reselect";

const sellersSelector = (state) => state.sellers;

export const productsSelector = (state) => state.products;

const sellersLengthSelector = createSelector(
  [sellersSelector],
  (sellers, products) => (sellers.length === 0 ? [] : products)
);

export const sellerNameSelector = createSelector(
  [productsSelector, sellersLengthSelector],
  (products, sellers) =>
    products.map((product) => {
      return {
        ...product,
        sellerName: sellers.find((seller) => seller.id === product.sellerId)
          .name,
      };
    })
);
