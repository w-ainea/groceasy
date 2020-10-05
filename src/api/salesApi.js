import { handleResponse, handleError } from "./api.utils";
const baseUrl = process.env.REACT_APP_MOCK_API_URL + "/sales/";

export function getSalesData() {
  return fetch(baseUrl).then(handleResponse).then(handleError);
}
