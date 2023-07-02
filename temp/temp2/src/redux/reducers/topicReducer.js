import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function topicReducer(state=initialState.topics,action) {
  switch(action.type) {
    case types.CREATE_TOPIC_SUCCESS:
      return [...state,{...action.topic}];
    case types.UPDATE_TOPIC_SUCCESS:
      return state.map(topic =>
        topic.id===action.topic.id? action.topic:topic
      );
    case types.LOAD_TOPICS_SUCCESS:
      return action.topics;
    case types.DELETE_TOPIC_OPTIMISTIC:
      return state.filter(topic => topic.id!==action.topic.id);
    default:
      return state;
  }
}
