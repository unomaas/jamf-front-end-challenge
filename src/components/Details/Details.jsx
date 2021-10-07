//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './Details.css';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import SnackbarManager from '../SnackbarManager/SnackbarManager';

// ⬇ Dependent Functionality:
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow, Snackbar, Alert, FormHelperText } from '@mui/material';
//#endregion ⬆⬆ All document setup above.


export default function Details() {
  //#region ⬇⬇ All state variables below:
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector(store => store.user);
  const snack = useSelector(store => store.snackBar);
  const [validationError, setValidationError] = useState("");

  // ⬇ Run on page load:
  useEffect(() => {
    // ⬇ Will set the color of the sidebar circles to indicate the page:
    dispatch({ type: 'SET_SIDEBAR', payload: ['success', 'action', 'action'] })
  }, []);
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleChange:
   * When the user types, this will set their input to the user object with keys for each field. 
   */
  const handleChange = (key, value) => {
    console.log('In Details handleChange, key/value:', key, value);
    // ⬇ Sends the keys/values to the estimate reducer object: 
    dispatch({
      type: 'SET_USER',
      payload: { key: key, value: value }
    });
  } // End handleChange

  /** ⬇ handleSubmit:
   * When clicked, this will post the object to the DB and send the user back to the dashboard. 
   */
  const handleSubmit = event => {
    console.log('In Details handleSubmit', userData);
    // ⬇ Don't refresh until submit:
    event.preventDefault();
    // ⬇ Resetting form validation:
    setValidationError("");
    // ⬇ Password validation:
    if (userData.password !== userData.verify) {
      setValidationError("* Your passwords must match to continue.");
    } else {
      // ⬇ Send the user to the next page:
      history.push(`/usergroup`);
      // ⬇ Snackbar Alert to show success:
      dispatch({ type: 'GET_SUCCESS_DETAILS' });
    }
  } // End handleSubmit


  //#endregion ⬆⬆ Event handlers above. 


  // ⬇ Rendering:
  return (
    <div className="Details-wrapper">

      {/* Snackbar configures all of the info pop-ups required. */}
      <SnackbarManager />

      <form onSubmit={handleSubmit}>
        <Grid
          container
        >

          <SideBar />

          <Grid
            className="Details-content"
            item
            xs={7}
          >

            <TableContainer>
              <Table>
                <TableBody>

                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className="Details-input"
                      >
                        EMAIL
                      </Typography>
                      <TextField
                        placeholder="[Required]"
                        required
                        fullWidth
                        onChange={event => handleChange('email', event.target.value)}
                        type="email"
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className="Details-input"
                      >
                        PASSWORD
                      </Typography>
                      <TextField
                        placeholder="[Required]"
                        required
                        fullWidth
                        onChange={event => handleChange('password', event.target.value)}
                        type="password"
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className="Details-input"
                      >
                        VERIFY PASSWORD
                      </Typography>
                      <TextField
                        placeholder="[Required]"
                        required
                        fullWidth
                        onChange={event => handleChange('verify', event.target.value)}
                        type="password"
                      />
                      <FormHelperText sx={{ color: 'red' }}>{validationError}</FormHelperText>
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Footer />

        </Grid>
      </form>

    </div>
  );
}