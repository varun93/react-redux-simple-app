import React, { Component } from "react";
import { connect } from "react-redux";

export class UploadDefinitionsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.data = [
      {
        moduleName: "inventory",
        fileTypes: ["i1", "i2", "i3", "i4", "i5"]
      },
      {
        moduleName: "swm",
        fileTypes: ["s1", "s2", "s3", "s4", "s5"]
      },
      {
        moduleName: "propertytax",
        fileTypes: ["p1", "p2", "p3", "p4", "p5"]
      },
      {
        moduleName: "assets",
        fileTypes: ["a1", "a2", "a3", "a4", "a5"]
      }
    ];

    this.options = this.data.map(module => module.moduleName);
    this.state = {
      selectedModule: 1,
      selectedFileType: 1,
      secondaryOptions: []
    };
  }

  componentDidMount() {
    //make the network call here
  }

  handleModuleDropDownChange = (event, index, value) => {
    const secondaryOptions = this.data[index].fileTypes;
    this.setState({ selectedModule: value, secondaryOptions });
  };

  handleFileTypeDropDownChange = (event, index, value) => {
    this.setState({ selectedFileType: value });
  };

  render() {
    const { secondaryOptions, selectedModule, selectedFileType } = this.state;
    return (
      <div>
        <DropDown
          options={this.options}
          title="Module Name"
          selected={selectedModule}
          handleChange={this.handleModuleDropDownChange}
        />
        <DropDown
          options={secondaryOptions}
          title="File Type"
          selected={selectedFileType}
          handleChange={this.handleFileTypeDropDownChange}
        />
      </div>
    );
  }
}
