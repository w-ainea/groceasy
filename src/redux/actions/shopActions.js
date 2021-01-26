import * as types from "./actionTypes";

const baseUrl = process.env.REACT_APP_API_URL + "/shop";

export const retrieveShop = (shop) => ({
  type: types.RETRIEVE_SHOP,
  payload: shop,
});

export const receiveShop = (shop) => ({
  type: types.RECEIVE_SHOP,
  payload: shop,
});

export const addNewShop = (shopName) => ({
  type: types.ADD_SHOP,
  payload: shopName,
});

export const fetchShop = (shop) => (dispatch) => {
  dispatch(retrieveShop(shop));
  return fetch(baseUrl, {
    method: "GET",
  })
    .then((result) => result.json())
    .then((shop) => receiveShop(shop))
    .catch((err) => alert(err));
};

export function createShop(shopName) {
  return function (dispatch) {
    return fetch(baseUrl + "/add", {
      method: "POST",
      body: JSON.stringify({
        shop_name: shopName,
      }),
    })
      .then((shopName) => dispatch(addNewShop(shopName)))
      .catch((err) => {
        throw err;
      });
  };
}
