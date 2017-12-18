import React, { Component } from "react";
import { connect } from "react-redux";
import DatePicker from "material-ui/DatePicker";
import { applyFromDateFilter, applyToDateFilter } from "../actions/filter";

class UserJobsDateFilterContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.maxDate = new Date();
  }

  render() {
    const {
      applyFromDateFilter,
      applyToDateFilter,
      fromDate,
      toDate
    } = this.props;
    const { maxDate } = this;

    return (
      <div>
        <DatePicker
          onChange={(event, date) => {
            applyFromDateFilter(date);
          }}
          floatingLabelText="To Date"
          value={fromDate}
        />
        <DatePicker
          onChange={(event, date) => {
            applyToDateFilter(date);
          }}
          floatingLabelText="From Date"
          value={toDate}
          maxDate={maxDate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  applyFromDateFilter: fromDate => dispatch(applyFromDateFilter(fromDate)),
  applyToDateFilter: toDate => dispatch(applyToDateFilter(toDate))
});

const mapStateToProps = (state, ownProps) => ({
  fromDate: state.filter.fromDate,
  toDate: state.filter.toDate
});

export default connect(mapStateToProps, mapDispatchToProps)(
  UserJobsDateFilterContainer
);
