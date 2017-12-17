import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "material-ui/DatePicker";

class UserJobsDateFilterContainer extends Component {
  constructor(props, context) {
    super(props, context);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);
    this.state = { maxDate, toDate: maxDate, fromDate: new Date() };
  }

  //max date should be today
  render() {
    const { fromDate, toDate } = this.state;
    const { maxDate } = this;

    return (
      <div>
        <DatePicker
          onChange={(event, date) => {
            this.setState({ fromDate: date });
          }}
          floatingLabelText="To Date"
          value={fromDate}
        />
        <DatePicker
          onChange={(event, date) => {
            this.setState({ toDate: date });
          }}
          floatingLabelText="From Date"
          value={toDate}
          maxDate={maxDate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  UserJobsDateFilterContainer
);
