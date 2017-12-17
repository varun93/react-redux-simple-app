import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const TableUi = ({ tableHeader, tableBody, styles }) => {
  const renderTableHeader = () => {
    return (
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          {tableHeader.map((header, index) => {
            return <TableHeaderColumn key={index}>{header}</TableHeaderColumn>;
          })}
        </TableRow>
      </TableHeader>
    );
  };

  const renderTableBody = () => {
    return (
      <TableBody displayRowCheckbox={false}>
        {tableBody.map((row, index) => {
          return (
            <TableRow key={index}>
              {Object.keys(row).map((fieldName, index) => {
                return (
                  <TableRowColumn key={index}>{row[fieldName]}</TableRowColumn>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    );
  };

  return (
    <Table>
      {renderTableHeader()}
      {renderTableBody()}
    </Table>
  );
};
export default TableUi;
