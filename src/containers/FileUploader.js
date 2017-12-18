import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadFile } from "../actions/fileUpload";
import RaisedButton from "material-ui/RaisedButton";
import UploadDefinitionsContainer from "./UploadDefinitions";

class FileUploaderContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      file: null,
      module: "inventory",
      tenantId: "default"
    };
  }

  handleOnChange = e => {
    const file = e.target.files[0];
    this.setState({ file });
  };

  handleSubmit = e => {
    const { file, module, tenantId } = this.state;
    // do a validation on these params if needed
    const formData = { file, module, tenantId };
    this.props.uploadFile(formData);
  };

  render() {
    const { handleSubmit, handleOnChange } = this;

    return (
      <div className="container">
        <UploadDefinitionsContainer />
        <input type="file" onChange={this.handleOnChange} />
        <RaisedButton onClick={handleSubmit} label="Save" primary={true} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  uploadFile: formData => dispatch(uploadFile(formData))
});

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  FileUploaderContainer
);
