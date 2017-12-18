import * as actionTypes from "../constants/actionTypes";

const initialState = {
  isFetching: false,
  error: false,
  fileStoreId: null,
  jobId: null
};
const fileUpload = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIATE_FILE_UPLOAD:
      return { ...state, isFetching: true, error: false };
    case actionTypes.FILE_UPLOAD_SUCCESS:
      return {
        ...state,
        fileStoreId: action.fileStoreId,
        isFetching: false,
        error: false
      };
    case actionTypes.FILE_UPLOAD_FAILURE:
      return { ...state, error: true, isFetching: false };

    case actionTypes.INITIATE_JOB_STATUS_RETRIEVAL:
      return { ...state, isFetching: true, error: false };
    case actionTypes.JOB_STATUS_RECEIVED:
      return {
        ...state,
        jobId: action.jobId,
        isFetching: false,
        error: false
      };
    case actionTypes.JOB_STATUS_FAILED_TO_RECEIVED:
      return { ...state, error: true, isFetching: false };
    default:
      return state;
  }
};
export default fileUpload;
