import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, defaultProps, setPropTypes } from 'recompose';

import orderBy from 'lodash/orderBy';
import format from 'date-fns/format';

import { Table as Container, TableHeader, TableBody } from 'material-ui/Table';

import Arrow from './style';
import { TableRow, TableRowColumn, TableHeaderColumn, Link } from '../../style';

import ArrowDropDown from './images/arrow_drop_down_18px.svg';
import ArrowDrowUp from './images/arrow_drop_up_18px.svg';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnSortClicked: false,
      img: ArrowDropDown,
      users: this.props.users,
    };
    this.sortByName = this.sortByName.bind(this);
  }

  sortByName() {
    this.setState({
      btnSortClicked: !this.state.btnSortClicked,
      img: this.state.btnSortClicked ? ArrowDropDown : ArrowDrowUp,
      users: orderBy(
        this.state.users,
        ['name.first'],
        [this.state.btnSortClicked ? 'asc' : 'desc'],
      ),
    });
  }

  render() {
    return (
      <Container>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn onClick={this.sortByName}>
              Name
              <Arrow src={this.state.img} />
            </TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Birthday</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
            <TableHeaderColumn>Phone Number</TableHeaderColumn>
            <TableHeaderColumn>Password</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.state.users.map((user, index) => (
            <TableRow key={index}>
              <TableRowColumn>
                <Link to={{ pathname: '/user-view', state: { user } }}>
                  {`${user.name.first} ${user.name.last}`}
                </Link>
              </TableRowColumn>
              <TableRowColumn>{user.email}</TableRowColumn>
              <TableRowColumn>{format(new Date(user.dob), 'd/D/YYYY')}</TableRowColumn>
              <TableRowColumn>{user.location.street}</TableRowColumn>
              <TableRowColumn>{user.phone}</TableRowColumn>
              <TableRowColumn>{user.login.password}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Container>
    );
  }
}

export default compose(
  setPropTypes({
    users: PropTypes.arrayOf(PropTypes.object),
  }),
  defaultProps({
    users: undefined,
  }),
)(Table);
