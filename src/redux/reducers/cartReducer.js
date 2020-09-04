import initialState from "./initialState";

const cartReducer = (state = initialState.cart, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default cartReducer;
