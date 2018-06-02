import { TableHeaderColumn, TableRowColumn } from 'material-ui/Table';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableRow = styled.tr`
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 13px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: inherit;
  &:hover {
    background-color: rgb(224, 224, 224);
    cursor: pointer;
  }
`;

const StyledTableHeaderColumn = styled(TableHeaderColumn)`
  position: relative;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 12px;
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #757575;
`;

const StyledTableRowColumn = styled(TableRowColumn)`
  height: 48px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: left;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #212121;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: unset;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  TableRow,
  StyledTableHeaderColumn as TableHeaderColumn,
  StyledTableRowColumn as TableRowColumn,
  StyledLink as Link,
};
