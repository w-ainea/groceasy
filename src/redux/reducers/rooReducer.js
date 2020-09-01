// the root reducer

import { combineReducers } from "redux";
import { productReducer, cartReducer } from ".";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
