import React, { Component } from "react";
import { connect } from "react-redux";
import TableUi from "../atomic-components/TableUi";

class UserJobsContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.tableHeader = ["ID", "Name", "Status"];

    this.tableBody = [
      {
        id: 1,
        name: "John Smith",
        status: "Employed"
      },
      {
        id: 2,
        name: "Varun Hegde",
        status: "Employed"
      },
      {
        id: 3,
        name: "KL Rahul",
        status: "Unemployed"
      },
      {
        id: 4,
        name: "Vinod Kambli",
        status: "Unemployed"
      },
      {
        id: 5,
        name: "Sourav Ganguly",
        status: "Employed"
      }
    ];
  }

  render() {
    const { tableHeader, tableBody } = this;
    return (
      <div>
        <TableUi tableHeader={tableHeader} tableBody={tableBody} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserJobsContainer);
