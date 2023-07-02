import {combineReducers} from "redux";
import topics from "./topicReducer";
import priorities from "./priorityReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer=combineReducers({
  topics,
  priorities,
  apiCallsInProgress
});

export default rootReducer;
