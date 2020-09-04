// the root reducer

import { combineReducers } from "redux";
import { productReducer, cartReducer, sellerReducer } from ".";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  sellers: sellerReducer,
});

export default rootReducer;
