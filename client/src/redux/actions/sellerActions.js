import * as types from "./actionTypes";

const baseUrl = process.env.REACT_APP_API_URL + "/sellers";

export function fetchSellers() {
  return function (dispatch) {
    return fetch(baseUrl + "/list", { method: "GET" })
      .then((response) => response.json())
      .then((sellers) => {
        dispatch(receiveSellers(sellers));
      })
      .then((sellers) => console.log(sellers))
      .catch((err) => {
        throw err;
      });
  };
}

export const receiveSellers = (sellers) => ({
  type: types.RECEIVE_SELLERS,
  payload: sellers,
});
