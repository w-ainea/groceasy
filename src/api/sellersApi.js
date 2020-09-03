import { handleError, handleResponse } from "./api.utils";
const baseUrl = process.env.API_URL + "/sellers/";

export function getSellers() {
  return fetch(baseUrl).then(handleResponse).then(handleError);
}
