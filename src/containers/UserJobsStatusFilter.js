import React, { Component } from "react";
import { connect } from "react-redux";

export default class UserJobsStatusFilterContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.options = [
      {
        value: "completed",
        label: "Completed"
      },
      {
        value: "in-progress",
        label: "In Progress"
      },
      {
        value: "new",
        label: "New"
      },
      {
        value: "failed",
        label: "Failed"
      }
    ];
    this.state = { selectedValue: "in-progress" };
  }

  handleChange = (e, selectedValue) => {
    this.setState({ selectedValue });
  };

  render() {
    const { options, handleChange } = this;
    const { selectedValue } = this.state;

    return (
      <div>
        <RadioButtonUi
          defaultValue="completed"
          name="Completion Status"
          options={options}
          handleChange={handleChange}
        />
      </div>
    );
  }
}