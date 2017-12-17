const initialState = {
  completionStatus: null,
  fromDate: null,
  toDate: null
};
const filter = (state = initialState, action) => {
  switch (action.type) {
    case "COMPLETION_STATUS":
      return action.filter;
    case "DATE_RANGE":
      return action.filter;
    default:
      return state;
  }
};

export default filter;
