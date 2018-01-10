import * as actionTypes from "../constants/actionTypes";
import { uploadFile } from "./fileUpload";
import { Api } from "../api";

export const initiateCreateJob = () => {
  return { type: actionTypes.INITIATE_JOB_CREATE };
};

export const jobCreated = jobId => {
  return { type: actionTypes.JOB_CREATE_SUCCESS, jobId };
};

export const createJobFailed = error => {
  return { type: actionTypes.JOB_CREATE_FAILED, error };
};

// upload the input file, then use the file store id to create the job
export const createJob = (moduleName, definitionName, file) => {
  return async (dispatch, getState) => {
    dispatch(initiateCreateJob());
    try {
      // first upload the file
      const requestFilePath = dispatch(uploadFile(moduleName, file));
      //create a request for job create
      const jobId = await Api().createJob(
        requestFilePath,
        moduleName,
        definitionName
      );
      dispatch(jobCreated(jobId));
    } catch (error) {
      //handle the error
      console.log(error);
    }
  };
};
