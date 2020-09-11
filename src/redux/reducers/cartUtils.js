export const addItem = (existingItems, itemToAdd) => {
  const itemInCart = existingItems.find((item) => item.id === itemToAdd.id);

  if (itemInCart) {
    return existingItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...existingItems, { ...itemToAdd, quantity: 1 }];
};

export const subtractCartItem = (cartItems, itemToSubtract) => {
  const item = cartItems.find((cartItem) => cartItem.id === itemToSubtract.id);

  if (item.quantity === 1) {
    return removeItem(cartItems, itemToSubtract);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToSubtract.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeItem = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};
