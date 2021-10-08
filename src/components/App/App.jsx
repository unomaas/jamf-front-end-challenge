import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Details from '../Details/Details';
import './App.css';
import { Grid } from '@mui/material';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';
import UserGroup from '../UserGroup/UserGroup';
import Submit from '../Submit/Submit';
import SnackbarManager from '../SnackbarManager/SnackbarManager';


function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_USER' });
  // }, [dispatch]);

  return (
    <Router>
      {/* <Grid container className="App-wrapper"> */}
      <div className="App-wrapper">

        {/* Snackbar configures all of the info pop-ups required. */}
        <SnackbarManager />

        <Header />

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/details" />

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

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404 - Please go back and try a different URL.</h1>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
