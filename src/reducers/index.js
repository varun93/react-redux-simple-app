import { combineReducers } from "redux";
import userJobs from "./userJobs";
import filter from "./filter";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  filter,
  userJobs
});

export default rootReducer;
