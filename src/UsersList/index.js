import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import Cards from './Cards/';
import Table from './Table/';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      error: null,
      isLoaded: false,
      users: [],
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({ isLoaded: true, users: res.results });
        },
        (err) => {
          this.setState({ isLoaded: true, error: err });
        },
      );
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const { error, isLoaded, users } = this.state;
    const actions = [
      <FlatButton label="'I understood this message'" primary onClick={this.handleClose} />,
    ];
    const appBar = { backgroundColor: '#1976D2' };
    const tabs = { backgroundColor: '#2196F3' };
    const inkBar = { backgroundColor: '#BBDEFB' };

    if (error) {
      return (
        <Dialog title="Error occured!" actions={actions} modal open={this.state.isOpen}>
          Error: {error.message}
        </Dialog>
      );
    } else if (!isLoaded) {
      return <LinearProgress mode="indeterminate" />;
    }
    return (
      <div>
        <Helmet>
          <title>Users List</title>
        </Helmet>
        <AppBar title="Users list" showMenuIconButton={false} style={appBar} />
        <Tabs tabItemContainerStyle={tabs} inkBarStyle={inkBar}>
          <Tab label="Table view">
            <Table users={users} />
          </Tab>
          <Tab label="Card view">
            <Cards users={users} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default UserList;
