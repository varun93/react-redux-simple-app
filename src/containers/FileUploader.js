import React, { Component } from "react";
import { connect } from "react-redux";

export default class FileUploaderContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleOnChange = e => {
    const file = e.target.files[0];
    const tenantId = "default";
    const module = "inventory";
    const formData = { module, file, tenantId };
    // Not the right way to do!
    // You need to have a seperate Upload/save button to proceed.
    Api().uploadFile(formData);
  };

  render() {
    return <input type="file" onChange={this.handleOnChange} />;
  }
}
