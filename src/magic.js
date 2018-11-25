import React, { Component } from "react";
const TableComponent = props => {
  return (
    <table>
      <tbody>
        <tr>{props.children}</tr>
      </tbody>
    </table>
  );
};

const TableColumns = props => {
  return (
    <div>
      <td>td A</td>
      <td>td B</td>
      <td>td C</td>
    </div>
  );
};
export default class Magic extends Component {
  render() {
    return (
      <TableComponent>
        <TableColumns />
      </TableComponent>
    );
  }
}
