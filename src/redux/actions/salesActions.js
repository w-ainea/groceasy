import * as types from "./actionTypes";
import * as salesApi from "../../api/salesApi";

export function fetchSales() {
  return async function (dispatch) {
    try {
      const sales = await salesApi.getSalesData();
      dispatch(receiveSales(sales));
    } catch (err) {
      throw err;
    }
  };
}

export const receiveSales = (salesData) => ({
  type: types.RECEIVE_SALES_DATA,
  payload: salesData,
});
