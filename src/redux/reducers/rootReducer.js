// the root reducer
import { combineReducers } from "redux";
import {
  productReducer,
  cartReducer,
  sellerReducer,
  categoryReducer,
  menuReducer,
  salesReducer,
  ordersReducer,
  shopReducer,
} from ".";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  sellers: sellerReducer,
  categories: categoryReducer,
  menu: menuReducer,
  sales: salesReducer,
  orders: ordersReducer,
  shops: shopReducer,
});

export default rootReducer;
