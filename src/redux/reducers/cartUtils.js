// add an item to the cart
export const addItem = (existingItems, itemToAdd) => {
  // check if an item already exists in the cart
  const itemInCart = existingItems.find((item) => item.id === itemToAdd.id);

  // if it has already been added, only increase the quantity of the item by 1
  if (itemInCart) {
    return existingItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  // if it is not in cart, return an array of existing items, in addition to the new product with a quantity of 1
  return [...existingItems, { ...itemToAdd, quantity: 1 }];
};

// subtract cart items
export const subtractCartItem = (cartItems, itemToSubtract) => {
  const item = cartItems.find((cartItem) => cartItem.id === itemToSubtract.id);

  // if the item quantity is 1, remove the item from the cart entirely
  if (item.quantity === 1) {
    return removeItem(cartItems, itemToSubtract);
  }
  // otherwise, just reduce the quantity in cart by 1
  return cartItems.map((cartItem) =>
    cartItem.id === itemToSubtract.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const removeItem = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};
