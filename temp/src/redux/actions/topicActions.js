import * as types from "./actionTypes";
import * as topicApi from "../../api/topicApi";
import {beginApiCall,apiCallError} from "./apiStatusActions";

export function loadTopicSuccess(topics) {
  return {type: types.LOAD_TOPICS_SUCCESS,topics};
}

export function createTopicSuccess(topic) {
  return {type: types.CREATE_TOPIC_SUCCESS,topic};
}

export function updateTopicSuccess(topic) {
  return {type: types.UPDATE_TOPIC_SUCCESS,topic};
}

export function deleteTopicOptimistic(topic) {
  return {type: types.DELETE_TOPIC_OPTIMISTIC,topic};
}

export function loadTopics() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return topicApi
      .getTopics()
      .then(topics => {
        dispatch(loadTopicSuccess(topics));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveTopic(topic) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch,getState) {
    dispatch(beginApiCall());
    return topicApi
      .saveTopic(topic)
      .then(savedTopic => {
        topic.id
          ? dispatch(updateTopicSuccess(savedTopic))
          :dispatch(createTopicSuccess(savedTopic));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteTopic(topic) {
  return function(dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteTopicOptimistic(topic));
    return topicApi.deleteTopic(topic.id);
  };
}
