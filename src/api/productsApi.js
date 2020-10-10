import { handleResponse, handleError } from "./api.utils";
const baseUrl = process.env.REACT_APP_MOCK_API_URL + "/products/";

export function getProducts() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveProduct(product) {
  return fetch(baseUrl + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProduct(productId) {
  return fetch(baseUrl + productId, { method: "DELETE" })
    .then(handleResponse)
    .then(handleError);
}
