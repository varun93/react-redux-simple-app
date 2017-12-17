import axios from "axios";
import { prepareFormData } from "./Utils";

export const ApiEndpoints = {
  USER_LOGIN_ENDPOINT: "/user/oauth/token",
  FILE_UPLOAD_ENDPOINT: "/filestore/v1/files",
  FILE_DOWNLOAD_ENDPOINT: "/filestore/v1/files/id",
  RETRIEVE_BATCH_STATUS_ENDPOINT: "",
  RETREIVE_USER_JOBS_ENDPOINT: "",
  MODULES_ACTION_API_ENDPOINT: ""
};

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

  const fetchPlayers = async () => {
    const response = await axios.get("/players");
    return response.data;
  };

  const createPlayer = async name => {
    try {
      const response = await axios.post("/players", { name });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const editPlayer = async player => {
    try {
      const { id } = player;
      const endpoint = `/players/${id}`;
      const response = await axios.put(endpoint, player);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const searchPlayer = async name => {
    try {
      const params = { params: { name } };
      const response = await axios.get("/players", params);
      return response.data;
    } catch (e) {}
  };

  const removePlayer = async player => {
    try {
      const { id } = player;
      const endpoint = `/players/${id}`;
      const response = await axios.delete(endpoint, player);
      return response.data;
    } catch (e) {
      console.log(e);
    }
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
    fetchPlayers,
    createPlayer,
    editPlayer,
    removePlayer,
    searchPlayer,
    uploadFile
  };
};
