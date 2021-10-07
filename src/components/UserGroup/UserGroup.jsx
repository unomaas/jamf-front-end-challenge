//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './UserGroup.css';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

// ⬇ Dependent Functionality:
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow, Select, MenuItem, Snackbar, Alert, FormControl, FormHelperText } from '@mui/material';

//#endregion ⬆⬆ All document setup above.


export default function UserGroup() {
  //#region ⬇⬇ All state variables below:
  const history = useHistory();
  const dispatch = useDispatch();
  const userGroups = useSelector(store => store.userGroups);
  const userData = useSelector(store => store.user);
  const snack = useSelector(store => store.snackBar);
  const [selectError, setSelectError] = useState("");

  // ⬇ Run on page load:
  useEffect(() => {
    // ⬇ Will get the User Group options from the DB:
    dispatch({ type: 'FETCH_USER_GROUPS' }),
      // ⬇ Will set the color of the sidebar circles to indicate the page:
      dispatch({ type: 'SET_SIDEBAR', payload: ['action', 'success', 'action'] })

  }, []);
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleChange:
   * When the user selects, this will set their input to the user object with keys for each field. 
   */
  const handleChange = (key, value) => {
    console.log('In UserGroup handleChange, key/value:', key, value);
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
    console.log('In UserGroup handleSubmit', userData);
    // ⬇ Don't refresh until submit:
    event.preventDefault();
    // ⬇ Resetting form validation:
    setSelectError("");
    // ⬇ Form validation:
    if (userData.userGroupId == 0) {
      setSelectError("Please select a User Group to continue.")
    } else {
      // ⬇ Send the user to the next page:
      // history.push(`/submit`);
    } // End if/else statement

  } // End handleSubmit

  /** ⬇ handleClose:
   * Functionality event handler for the MUI Snackbar, this will close the pop-up notification. 
   */
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    } // End if statement
    dispatch({ type: 'SET_CLOSE' })
  }; // End handleClose
  //#endregion ⬆⬆ Event handlers above. 

  // ⬇ Rendering:
  return (
    <div className="Details-wrapper">

      {/* Snackbar configures all of the info pop-ups required. */}
      <Snackbar
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          variant={snack.variant}
          onClose={handleClose}
          severity={snack.severity}
        >
          {snack.message}
        </Alert>
      </Snackbar>

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
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: '400' }}
                      >
                        Choose the User Group
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className="Details-input"
                      >
                        USER GROUP
                        &nbsp;&nbsp;&nbsp;
                        <Typography
                          variant="caption"
                          sx={{ color: 'gray', fontSize: ".9em" }}
                        >
                          User Group to add the users to
                        </Typography>
                      </Typography>
                      <Select
                        onChange={event => handleChange('userGroupId', event.target.value)}
                        required
                        fullWidth
                        value={userData.userGroupId}
                      >
                        <MenuItem key="0" value="0">None</MenuItem>
                        {userGroups?.map(group => {
                          return (<MenuItem key={group?.id} value={group?.id}>{group?.name}</MenuItem>)
                        })}
                      </Select>
                      <FormHelperText sx={{ color: 'red' }}>{selectError}</FormHelperText>

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
