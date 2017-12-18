import * as actionTypes from "../constants/actionTypes";
import { Api } from "../api";

export const initiateFileUpload = () => {
  return { type: actionTypes.INITIATE_FILE_UPLOAD };
};

// fetch players success
export const fileUploaded = fileStoreId => {
  return { type: actionTypes.FILE_UPLOAD_SUCCESS, fileStoreId };
};

// fetch players failure
export const fileUploadFailed = error => {
  return { type: actionTypes.FILE_UPLOAD_FAILURE, error };
};

export const uploadFile = params => {
  return async (dispatch, getState) => {
    dispatch(initiateFileUpload());
    try {
      const fileStoreId = await Api().uploadFileMock(params);
      dispatch(fileUploaded(fileStoreId));
    } catch (error) {
      //handle the error
      console.log(error);
    }
  };
};
