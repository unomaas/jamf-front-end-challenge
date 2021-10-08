//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './Submit.css';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
// ⬇ Dependent Functionality:
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Select, MenuItem } from '@mui/material';
//#endregion ⬆⬆ All document setup above.


export default function Submit() {
  //#region ⬇⬇ All state variables below:
  const history = useHistory();
  const dispatch = useDispatch();
  // ⬇ Loads the User Groups dropdown options:
  const userGroups = useSelector(store => store.userGroups);
  // ⬇ Loads the userData for form validation to make sure they can Submit:
  const userData = useSelector(store => store.user);
  // ⬇ Run on page load:
  useEffect(() => {
    // ⬇ Will set the color of the sidebar circles to indicate the page:
    dispatch({ type: 'SET_SIDEBAR', payload: ['action', 'action', 'success'] })
  }, []); // ⬅ Run only once. 
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
   * When clicked, this will post the object to the DB and send the user back to the dashboard. 
   */
  const handleSubmit = event => {
    console.log('In Details handleSubmit', userData);
    // ⬇ Don't refresh until submit:
    event.preventDefault();
    // ⬇ For validation to make sure that the data exists for a proper submit (aka that they didn't refresh or come here via URL without doing the first two steps):
    if (!userData.email || !userData.userGroupId) {
      // ⬇ Send the user to the first page:
      history.push(`/details`);
      // ⬇ Snackbar Alert to show failure:
      dispatch({ type: 'GET_ERROR_SUBMIT' });
    } else {
      // ⬇ Send the user to the first page:
      history.push(`/details`);
      // ⬇ Snackbar Alert to show success:
      dispatch({ type: 'GET_SUCCESS_SUBMIT' });
    }
  } // End handleSubmit
  //#endregion ⬆⬆ Event handlers above. 


  // ⬇ Rendering:
  return (
    <div className="Details-wrapper">

      <form onSubmit={handleSubmit}>
        <Grid
          container
        >

          {/* ⬇ We load this inside the component to maintain spacing/responsiveness: */}
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

          {/* ⬇ We load this inside the component to maintain spacing/responsiveness: */}
          <Footer />

        </Grid>
      </form>

    </div>
  ); // End return
} // End Submit