import * as types from "./actionTypes";

const baseUrl = process.env.REACT_APP_API_URL + "/checkout";

export const requestCheckout = (amount, phone) => ({
  type: types.REQUEST_CHECKOUT,
  amount,
  phone,
});

export const checkout = (amount, phone) => {
  return (dispatch) => {
    dispatch(requestCheckout(amount, phone));
    return fetch(baseUrl + "/stk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Amount: amount,
        PartyA: phone,
        PhoneNumber: phone,
      }),
    })
      .then((response) => response.json())
      .then((err) => console.log(err));
  };
};