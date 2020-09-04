// the root reducer

import { combineReducers } from "redux";
import { productReducer, cartReducer, sellerReducer, categoryReducer } from ".";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  sellers: sellerReducer,
  categories: categoryReducer,
});

export default rootReducer;
