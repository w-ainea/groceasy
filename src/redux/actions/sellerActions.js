import * as types from "./actionTypes";
import * as sellersApi from "../../api/sellersApi";

export function fetchSellers() {
  return function (dispatch) {
    return sellersApi
      .getSellers()
      .then((products) => {
        dispatch(receiveSellers(products));
      })
      .catch((err) => {
        throw err;
      });
  };
}

export const receiveSellers = (sellers) => ({
  type: types.RECEIVE_SELLERS,
  payload: sellers,
});
