import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Details from '../Details/Details';
import './App.css';
import { Grid } from '@mui/material';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';


function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_USER' });
  // }, [dispatch]);

  return (
    <Router>
      {/* <Grid container className="App-wrapper"> */}
      <div className="App-wrapper">

        <Header />

        {/* <SideBar /> */}

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/details" />

          <Route
            exact
            path="/details"
          >
            <Details />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404 - Please go back and try a different URL.</h1>
          </Route>
        </Switch>

        {/* <Footer /> */}

      </div>
    </Router>
  );
}

export default App;
