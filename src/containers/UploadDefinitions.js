import React, { Component } from "react";
import { connect } from "react-redux";
import DropDown from "../atomic-components/DropDownUi";
import {
  fetchUploadDefinitions,
  moduleSelected,
  fileTypeSelected
} from "../actions/uploadDefinitions";

class UploadDefinitionsContainer extends Component {
  componentDidMount() {
    this.props.fetchUploadDefinitions();
  }

  handleModuleDropDownChange = (event, index, value) => {
    this.props.moduleSelected(value);
  };

  handleFileTypeDropDownChange = (event, index, value) => {
    this.props.fileTypeSelected(value);
  };

  render() {
    const { selectedModule, selectedFileType, uploadDefinitions } = this.props;
    const { handleFileTypeDropDownChange, handleModuleDropDownChange } = this;
    const moduleItems = uploadDefinitions.length
      ? uploadDefinitions.map(uploadDefinition => uploadDefinition.moduleName)
      : [];
    const moduleFileTypes = moduleItems.length
      ? uploadDefinitions[selectedModule - 1].fileTypes
      : [];

    return (
      <div>
        <DropDown
          options={moduleItems}
          title="Module Name"
          selected={selectedModule}
          handleChange={handleModuleDropDownChange}
        />
        <DropDown
          options={moduleFileTypes}
          title="File Type"
          selected={selectedFileType}
          handleChange={handleFileTypeDropDownChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUploadDefinitions: () => dispatch(fetchUploadDefinitions()),
  moduleSelected: moduleName => dispatch(moduleSelected(moduleName)),
  fileTypeSelected: fileType => dispatch(fileTypeSelected(fileType))
});

const mapStateToProps = (state, ownProps) => ({
  uploadDefinitions: state.uploadDefinitions.items,
  selectedModule: state.uploadDefinitions.selectedModule,
  selectedFileType: state.uploadDefinitions.selectedFileType
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UploadDefinitionsContainer
);
