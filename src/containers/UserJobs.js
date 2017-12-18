import React, { Component } from "react";
import { connect } from "react-redux";
import TableUi from "../atomic-components/TableUi";
import { fetchUserJobs } from "../actions/userJobs";
import UserJobFilters from "./UserJobFilters";

class UserJobsContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.tableHeader = ["Job ID", "Status", "Download"];
  }

  componentDidMount() {
    this.props.fetchUserJobs();
  }

  render() {
    const { tableHeader } = this;
    const { userJobs } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h4>Filter Jobs</h4>
            <UserJobFilters />
          </div>
          <div className="col-lg-9">
            <TableUi tableHeader={tableHeader} tableBody={userJobs} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserJobs: filter => dispatch(fetchUserJobs(filter))
});

const mapStateToProps = (state, ownProps) => ({
  userJobs: state.userJobs.items
});

export default connect(mapStateToProps, mapDispatchToProps)(UserJobsContainer);
