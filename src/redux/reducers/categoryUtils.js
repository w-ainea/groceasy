export const loadProducts = (categories, products) => {
  categories.map(function (category) {
    return {
      ...category,
      productsInCategory: products.filter(
        (product) => product.categoryId === category.categoryId
      ),
    };
  });
};
