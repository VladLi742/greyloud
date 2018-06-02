import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import 'normalize.css';
import UsersList from './UsersList/';
import UserView from './UserView/';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={UsersList} />
            <Route path="/user-view" exact component={UserView} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);
