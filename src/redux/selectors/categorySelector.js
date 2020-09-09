import { createSelector } from "reselect";

const categoriesSelector = (state) => state.categories;

export const allCategoriesSelector = createSelector(
  [categoriesSelector],
  (categories) => categories
);
