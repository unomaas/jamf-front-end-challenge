//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './Submit.css';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import SnackbarManager from '../SnackbarManager/SnackbarManager';

// ⬇ Dependent Functionality:
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow, Snackbar, Alert, FormHelperText, Select, MenuItem } from '@mui/material';

//#endregion ⬆⬆ All document setup above.


export default function Submit() {
  //#region ⬇⬇ All state variables below:
  const history = useHistory();
  const dispatch = useDispatch();
  const userGroups = useSelector(store => store.userGroups);
  const userData = useSelector(store => store.user);
  const snack = useSelector(store => store.snackBar);
  const [validationError, setValidationError] = useState("");

  // ⬇ Run on page load:
  useEffect(() => {
    // ⬇ Will set the color of the sidebar circles to indicate the page:
    dispatch({ type: 'SET_SIDEBAR', payload: ['action', 'action', 'success'] })
  }, []);
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
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
    if (userData.password !== userData.validation) {
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
                        sx={{ color: "gray" }}
                      >
                        EMAIL
                      </Typography>
                      <TextField
                        value={userData.email}
                        required
                        fullWidth
                        type="email"
                        disabled
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className="Details-input"
                        sx={{ color: "gray" }}
                      >
                        USER GROUP
                      </Typography>
                      <Select
                        required
                        fullWidth
                        value={userData.userGroupId}
                        disabled
                      >
                        <MenuItem key="0" value="0">None</MenuItem>
                        {userGroups?.map(group => {
                          return (<MenuItem key={group?.id} value={group?.id}>{group?.name}</MenuItem>)
                        })}
                      </Select>
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