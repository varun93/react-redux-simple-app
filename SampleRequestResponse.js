// SampleRequest Info
{
     "RequestInfo": {
        "apiId": "org.egov.pt",
        "ver": "1.0",
        "ts": "27-06-2017 10:30:12",
        "action": "asd",
        "did": "4354648646",
        "key": "xyz",
        "msgId": "654654",
        "requesterId": "61",
        "authToken": "string"
    }
}

// Sample Upload Job
    //   RequiredFields
    //   - tenantId
    //   - moduleName
    //   - defName
    //   - requestFilePath

{
    "UploadJobInfo" :  {
            "tenantId": "string",
            "moduleName": "string",
            "defName": "string",
            "requestFilePath": "string",
            "responseFilePath": "string",
            "status": "new",
            "totalRows": 0,
            "successfulRows": 0,
            "failedRows": 0,
            "requesterName": "string"
        }
}
// Response
{
    "UploadJobs": [
        {
            "tenantId": "string",
            "moduleName": "string",
            "defName": "string",
            "requestFilePath": "string",
            "responseFilePath": "string",
            "status": "new",
            "totalRows": 0,
            "successfulRows": 0,
            "failedRows": 0,
            "requesterName": "string"
        }
    ],
    "RequestInfo": {
        "apiId": "string",
        "ver": "string",
        "ts": 0,
        "action": "string",
        "did": "string",
        "key": "string",
        "msgId": "string",
        "requesterId": "string",
        "authToken": "string"
    }
}

// Response
{
  "ResponseInfo": {
    "apiId": "string",
    "ver": "string",
    "ts": 0,
    "resMsgId": "string",
    "msgId": "string",
    "status": "SUCCESSFUL"
  },
  "UploadJobs": [
    {
      "tenantId": "string",
      "moduleName": "string",
      "defName": "string",
      "code": "string",
      "requestFilePath": "string",
      "responseFilePath": "string",
      "status": "new",
      "totalRows": 0,
      "successfulRows": 0,
      "failedRows": 0,
      "requesterName": "string"
    }
  ]
}

// Upload Definition Request
// send only request info 
// Upload Defintions Response
{
  "ResponseInfo": {
    "apiId": "string",
    "ver": "string",
    "ts": 0,
    "resMsgId": "string",
    "msgId": "string",
    "status": "SUCCESSFUL"
  },
  "ModuleDefs": [
    {
      "code": "string",
      "name": "string",
      "Definitions": [
        {
          "code": "string",
          "name": "string",
          "path": "string"
        }
      ]
    }
  ]
}


// Job Search Request
//  - Required Info
//  - RequestInfo

{
  "codes": [
    "string"
  ],
  "statuses": [
    "string"
  ],
  "requesterNames": [
    "string"
  ],
  "startDate": 0,
  "endDate": 0,
  "RequestInfo": {
  }
}

// Response

{
  "ResponseInfo": {
    "apiId": "string",
    "ver": "string",
    "ts": 0,
    "resMsgId": "string",
    "msgId": "string",
    "status": "SUCCESSFUL"
  },
  "UploadJobs": [
    {
      "tenantId": "string",
      "moduleName": "string",
      "defName": "string",
      "code": "string",
      "requestFilePath": "string",
      "responseFilePath": "string",
      "status": "new",
      "totalRows": 0,
      "successfulRows": 0,
      "failedRows": 0,
      "requesterName": "string"
    }
  ]
}