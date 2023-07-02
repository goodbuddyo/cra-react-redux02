import * as types from "./actionTypes";
import * as priorityApi from "../../api/priorityApi";
import {beginApiCall,apiCallError} from "./apiStatusActions";

export function loadPrioritiesSuccess(priorities) {
  return {type: types.LOAD_AUTHORS_SUCCESS,priorities};
}

export function loadPriorities() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return priorityApi
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
