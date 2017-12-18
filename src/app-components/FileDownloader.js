import React from "react";

const FileDownloader = ({ fileStoreId, tenantId = "default" }) => {
  const requestParams = { tenantId, fileStoreId };
  const downloadUrl = getRequestUrl(
    ApiEndpoints.FILE_DOWNLOAD_ENDPOINT,
    requestParams
  );

  return (
    <a href={downloadUrl} target="_blank">
      Download File
    </a>
  );
};

export default FileDownloader;
