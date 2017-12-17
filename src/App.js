import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PlayersArchive from "./Containers/PlayersArchive";
import CreatePlayer from "./Containers/CreatePlayer";
import EditPlayer from "./Containers/EditPlayer";
import Player from "./Containers/Player";
import { Api, ApiEndpoints } from "./Api";
import { getRequestUrl } from "./Utils";
import DatePicker from "material-ui/DatePicker";

const DownloadFile = ({ fileStoreId, tenantId = "default" }) => {
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

const Homepage = () => {
  return (
    <div>
      <UploadDefinitions />
      <UiSingleFileUploadContainer />
      <Filters />
      <TableRenderer />
      {/* File Download Compoent */}
      <DownloadFile fileStoreId="3506f057-d9e1-4846-9e20-d8a29f7e2630" />
    </div>
  );
};

const Players = () => {
  return (
    <Switch>
      <Route exact path="/players" component={PlayersArchive} />
      <Route path="/players/create" component={CreatePlayer} />
      <Route exact path="/players/:playerId" component={Player} />
      <Route path="/players/:playerId/edit" component={EditPlayer} />
    </Switch>
  );
};

const Main = () => {
  return (
    <main>
      <Route exact path="/" component={Homepage} />
      <Route path="/players" component={Players} />
    </main>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
