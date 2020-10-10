export const saveProduct = (existingProducts, productToSave) => {
  const productExists = existingProducts.find(
    (product) => product.id === productToSave.id
  );

  if (productExists) {
    return { ...existingProducts, productToSave };
  } else {
    return { productToSave };
  }
};
