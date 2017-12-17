import axios from "axios";
import * as apiEndpoints from "../constants/ApiEndpoints";
import { prepareFormData } from "../utils";

export const Api = () => {
  const instance = axios.create({
    baseURL: window.location.origin,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic ZWdvdi11c2VyLWNsaWVudDplZ292LXVzZXItc2VjcmV0"
    }
  });

  const httpRequest = async (endPoint, requestParams) => {
    const response = await instance.post(endPoint, requestParams);
    return response;
  };

  // upload file API
  const uploadFile = async ({ module, tenantId, file }) => {
    const requestParams = { tenantId, module, file };
    const formData = prepareFormData(requestParams);
    const endPoint = ApiEndpoints.FILE_UPLOAD;

    const url = "/filestore/v1/files?tenantId=default";
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    const responseStatus = parseInt(response.status);
    let fileStoreId = false;

    if (responseStatus === 201) {
      // this has to be sent
      const responseData = response.data;
      fileStoreId = responseData.files.length
        ? responseData.files[0].fileStoreId
        : false;
    }

    console.log(fileStoreId);
  };

  return {
    uploadFile
  };
};
