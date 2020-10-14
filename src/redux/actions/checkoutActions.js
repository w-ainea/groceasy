import * as types from "./actionTypes";

const baseUrl = process.env.REACT_APP_API_URL + "/checkout";

export const requestCheckout = (amount) => ({
  type: types.REQUEST_CHECKOUT,
  payload: amount,
});

export const checkout = (amount) => {
  return (dispatch) => {
    dispatch(requestCheckout(amount));
    return fetch(baseUrl + "/pay", {
      method: "POST",
      headers: { Authorization: "auth" },
    });
  };
};
