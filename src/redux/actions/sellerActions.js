import axios from "axios";
import * as types from "./actionTypes";

const baseUrl = process.env.REACT_APP_API_URL + "/users";

export const receiveSellers = (sellers) => ({
  type: types.RECEIVE_SELLERS,
  payload: sellers,
});

export function fetchSellers() {
  return function (dispatch) {
    return axios
      .get(baseUrl)
      .then((sellers) => {
        dispatch(receiveSellers(sellers.data.users));
      })
      .catch((err) => {
        throw err;
      });
  };
}
