import { handleResponse, handleError } from "./api.utils";
const baseUrl = process.env.REACT_APP_API_URL + "/sellers/";

export async function getSellers() {
  try {
    const response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
}