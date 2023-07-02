import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import {beginApiCall,apiCallError} from "./apiStatusActions";

export function loadPrioritiesSuccess(priorities) {
  return {type: types.LOAD_AUTHORS_SUCCESS,priorities};
}

export function loadPriorities() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getPriorities()
      .then(priorities => {
        dispatch(loadPrioritiesSuccess(priorities));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
