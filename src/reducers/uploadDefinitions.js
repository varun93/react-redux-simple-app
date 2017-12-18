import * as actionTypes from "../constants/actionTypes";

const initialState = {
  isFetching: false,
  error: false,
  selectedModule: 1,
  selectedFileType: 1,
  items: []
};

const uploadDefinitions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIATE_UPLOAD_DEFINITIONS_FETCH:
      return { ...state, isFetching: true, error: false };

    case actionTypes.UPLOAD_DEFINTIONS_RECEIVED:
      return {
        ...state,
        items: action.uploadDefinitions,
        isFetching: false,
        error: false
      };

    case actionTypes.FETCH_UPLOAD_DEFINITIONS_FAILURE:
      return { ...state, error: true, isFetching: false };

    case actionTypes.MODULE_SELECTED:
      return {
        ...state,
        selectedModule: action.moduleName
      };

    case actionTypes.FILE_TYPE_SELECTED:
      return {
        ...state,
        selectedFileType: action.fileType
      };

    default:
      return state;
  }
};
export default uploadDefinitions;
