import * as types from "./actionTypes";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL + "/orders";

// place order
export const placeOrder = (order) => ({
  type: types.PLACE_ORDER,
  payload: order,
});

// save order to the database
export const saveOrder = (order) => (dispatch) =>
  axios(baseUrl + "/add", {
    method: "POST",
    data: order,
  }).then((order) => dispatch(placeOrder(order)));
