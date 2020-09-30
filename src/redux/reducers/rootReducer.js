// the root reducer

import { combineReducers } from "redux";
import {
  productReducer,
  cartReducer,
  sellerReducer,
  categoryReducer,
  menuReducer,
} from ".";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  sellers: sellerReducer,
  categories: categoryReducer,
  menu: menuReducer,
});

export default rootReducer;
