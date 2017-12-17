import * as actionTypes from "../constants/actionTypes";

// fetch players success
export const applyDateFilter = (fromDate, toDate = new Date()) => {
  return { type: actionTypes.DATE_FILTER, players };
};

export const applyJobsStatusFilter = completionStatus => {
  return { type: actionTypes.JOBS_STATUS_FILTER, players };
};
