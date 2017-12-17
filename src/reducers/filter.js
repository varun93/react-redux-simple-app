import * as actionTypes from "../constants/actionTypes";

const initialState = {
  completionStatus: null,
  fromDate: null,
  toDate: null
};
const filter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JOBS_STATUS_FILTER:
      return {
        ...state,
        completionStatus: action.completionStatus
      };
    case actionTypes.DATE_FILTER:
      return {
        ...state,
        fromDate: action.fromDate,
        toDate: action.toDate
      };
    default:
      return state;
  }
};

export default filter;
