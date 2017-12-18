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

  const fetchUploadDefintions = async () => {
    const uploadDefinitions = [
      { moduleName: "inventory", fileTypes: ["i1", "i2", "i3", "i4", "i5"] },
      { moduleName: "swm", fileTypes: ["s1", "s2", "s3", "s4", "s5"] },
      { moduleName: "propertytax", fileTypes: ["p1", "p2", "p3", "p4", "p5"] },
      { moduleName: "assets", fileTypes: ["a1", "a2", "a3", "a4", "a5"] }
    ];

    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(uploadDefinitions);
      }, 1000);
    });
  };

  const fetchUserJobs = async filter => {
    const userJobs = [
      { id: 1, status: "Completed", fileStoreId: "" },
      { id: 2, status: "Failed" },
      { id: 3, status: "InProgress" },
      { id: 4, status: "New" },
      { id: 5, status: "Completed", fileStoreId: "" }
    ];
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(userJobs);
      }, 1000);
    });
  };

  const uploadFileMock = async ({ module, tenantId, file }) => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const fileStoreId = "2323424243";
        resolve(fileStoreId);
      }, 1000);
    });
  };

  const fetchJobStatus = async ({ fileStoreId }) => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const jobStatusId = "acds133";
        resolve(jobStatusId);
      }, 1000);
    });
  };

  // upload file API
  const uploadFile = async ({ module, tenantId, file }) => {
    const requestParams = { tenantId, module, file };
    const formData = prepareFormData(requestParams);
    const endPoint = apiEndpoints.FILE_UPLOAD_ENDPOINT;

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
    uploadFile,
    uploadFileMock,
    fetchJobStatus,
    fetchUserJobs,
    fetchUploadDefintions
  };
};
