import React, { Component } from "react";
import { connect } from "react-redux";

//filters
export class Filters extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <JobCompletionStatusFilter />
        <DateFilter />
        <button>Apply Filter</button>
      </div>
    );
  }
}
