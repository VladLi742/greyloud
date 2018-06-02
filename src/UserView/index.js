import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, defaultProps, setPropTypes } from 'recompose';
import Dialog from 'material-ui/Dialog';
import { Helmet } from 'react-helmet';
import { Table, TableBody, TableHeader } from 'material-ui/Table';

import format from 'date-fns/format';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import Columns from './Columns';

import { TableRow, TableHeaderColumn, Link } from '../style';

class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: true, user: this.props.location.state || false };
  }

  render() {
    const { user } = this.state.user;
    const appBar = { backgroundColor: '#1976D2' };

    return (
      <div>
        <Helmet>
          <title>User View</title>
        </Helmet>
        <AppBar
          title="User view"
          iconElementLeft={
            <IconButton onClick={this.props.history.goBack}>
              <ArrowBack />
            </IconButton>
          }
          style={appBar}
        />
        {!user ? (
          <Dialog title="Oops!" modal open={this.state.isOpen}>
            It seems you have not selected a user. You can select the user on the link:{' '}
            <Link to={{ pathname: '/' }}>Click here!</Link>
          </Dialog>
        ) : (
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Gender</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>Login</TableHeaderColumn>
                <TableHeaderColumn>Dob</TableHeaderColumn>
                <TableHeaderColumn>Registered</TableHeaderColumn>
                <TableHeaderColumn>Phone</TableHeaderColumn>
                <TableHeaderColumn>Cell</TableHeaderColumn>
                <TableHeaderColumn>Id</TableHeaderColumn>
                <TableHeaderColumn>Picture</TableHeaderColumn>
                <TableHeaderColumn>Nat</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <Columns field={user.gender} />
                <Columns field={user.name} />
                <Columns field={user.location} />
                <Columns field={user.email} />
                <Columns field={user.login} />
                <Columns field={format(new Date(user.dob), 'd/D/YYYY')} />
                <Columns field={user.registered} />
                <Columns field={user.phone} />
                <Columns field={user.cell} />
                <Columns field={user.id} />
                <Columns field={user.picture} />
                <Columns field={user.nat} />
              </TableRow>
            </TableBody>
          </Table>
        )}
      </div>
    );
  }
}

export default compose(
  setPropTypes({
    location: PropTypes.shape({
      state: PropTypes.object,
    }),
    history: PropTypes.shape({
      goBack: PropTypes.func,
    }),
  }),
  defaultProps({
    location: false,
    history: undefined,
  }),
)(UserView);
