export const addItem = (existingItems, itemToAdd) => {
  const itemInCart = existingItems.find((item) => item.id === itemToAdd.id);

  if (itemInCart) {
    return existingItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...existingItems, { ...itemToAdd, quantity: 1 }];
};
