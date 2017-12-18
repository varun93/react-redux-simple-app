import { combineReducers } from "redux";
import userJobs from "./userJobs";
import filter from "./filter";
import auth from "./auth";
import uploadDefinitions from "./uploadDefinitions";
import fileUpload from "./fileUpload";

const rootReducer = combineReducers({
  auth,
  filter,
  userJobs,
  fileUpload,
  uploadDefinitions
});

export default rootReducer;
