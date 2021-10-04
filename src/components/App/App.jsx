import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../MuiStyling/MuiStyling';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_USER' });
  // }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>

          <Header />

          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/details" />

            <Route
              exact
              path="/details"
            >
              <LandingPage />
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404 - Please go back and try a different page.</h1>
            </Route>
          </Switch>

        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;
