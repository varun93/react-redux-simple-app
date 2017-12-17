const initialState = {
  isFetching: false,
  error: false,
  items: []
};
const jobs = (state = initialState, action) => {
  switch (action.type) {
    case "ERROR_FETCHING_JOBS":
      return;
    case "REQUEST_JOBS":
      return;
    case "RECEIVE_JOBS":
      return;
    default:
      return state;
  }
};
export default jobs;
