import * as types from "./actionTypes";

const baseUrl = process.env.REACT_APP_API_URL + "/orders";

// place order
export const placeOrder = (order) => ({
  type: types.PLACE_ORDER,
  payload: order,
});

export const saveOrder = (order) => (dispatch) =>
  fetch(baseUrl + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      order,
    }),
  })
    .then((response) => response.text())
    .then((order) => dispatch(placeOrder(order)));
