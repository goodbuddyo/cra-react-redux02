import {combineReducers} from "redux";
import topics from "./topicReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer=combineReducers({
  topics,
  authors,
  apiCallsInProgress
});

export default rootReducer;
