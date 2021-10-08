//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './App.css';
import Header from '../Header/Header';
import Details from '../Details/Details';
import UserGroup from '../UserGroup/UserGroup';
import Submit from '../Submit/Submit';
import SnackbarManager from '../SnackbarManager/SnackbarManager';
// ⬇ Dependent Functionality:
import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
//#endregion ⬆⬆ All document setup above.


export default function App() {
  // ⬇ Rendering:
  return (
    <Router>
      <div className="App-wrapper">

        {/* Snackbar configures all of the info pop-ups required. */}
        <SnackbarManager />

        <Header />

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/details: */}
          <Redirect exact from="/" to="/details" />

          {/* All routes are unprotected (aka, no login required to view): */}
          <Route
            exact
            path="/details"
          >
            <Details />
          </Route>

          <Route
            exact
            path="/usergroup"
          >
            <UserGroup />
          </Route>

          <Route
            exact
            path="/submit"
          >
            <Submit />
          </Route>

          {/* If none of the other routes matched, we show a 404: */}
          <Route>
            <h1>404 - Please go back and try a different URL.</h1>
          </Route>
        </Switch>

      </div>
    </Router>
  ); // End return
} // End App
