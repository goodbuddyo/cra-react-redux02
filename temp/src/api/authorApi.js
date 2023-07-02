import {handleResponse,handleError} from "./apiUtils";
const baseUrl=process.env.API_URL+"/priorities/";

export function getPrioritys() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
