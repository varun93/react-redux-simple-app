import * as actionTypes from "../constants/actionTypes";

// fetch players success
export const applyDateFilter = (fromDate, toDate = new Date()) => {
  return { type: actionTypes.FETCH_PLAYERS_SUCCESS, players };
};

export const applyJobsCompletionStatusFilter = completionStatus => {
  return { type: actionTypes.FETCH_PLAYERS_SUCCESS, players };
};
