import * as actionTypes from "../constants/actionTypes";

const initialState = {
  isFetching: false,
  error: false,
  items: []
};
const userJobs = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIATE_USER_JOBS_FETCH:
      return { ...state, isFetching: true, error: false };
    case actionTypes.FETCH_USER_JOBS_SUCCESS:
      return {
        ...state,
        items: action.userJobs,
        isFetching: false,
        error: false
      };
    case actionTypes.FETCH_PLAYERS_FAILURE:
      return { ...state, error: true, isFetching: false };
    default:
      return state;
  }
};
export default userJobs;
