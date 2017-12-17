import * as actionTypes from "../constants/actionTypes";
import { Api } from "../Api";

export const initiateUserJobsFetch = () => {
  return { type: actionTypes.INITIATE_USER_JOBS_FETCH };
};

// fetch players success
export const fetchUserJobsSuccess = (userJobs = []) => {
  return { type: actionTypes.FETCH_USER_JOBS_SUCCESS, userJobs };
};

// fetch players failure
export const fetchPlayersFailure = error => {
  return { type: actionTypes.FETCH_PLAYERS_FAILURE, error };
};

export const fetchUserJobs = filter => {
  return async (dispatch, getState) => {
    try {
      const userJobs = await Api().fetchUserJobs(filter);
      dispatch(fetchUserJobsSuccess(userJobs));
    } catch (error) {
      //handle the error
      console.log(error);
    }
  };
};
