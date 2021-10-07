//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './Details.css';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

// ⬇ Dependent Functionality:
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

//#endregion ⬆⬆ All document setup above.


function Details() {
  //#region ⬇⬇ All state variables below:
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector(store => store.user);
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
    console.log('In handleChange, key/value:', key, value);
    // ⬇ Sends the keys/values to the estimate reducer object: 
    dispatch({
      type: 'SET_USER',
      payload: { key: key, value: value }
    });
  } // End handleChange
  //#endregion ⬆⬆ Event handles above. 

  // ⬇ Rendering:
  return (
    <>
      <Grid
        container
        // xs={12}
        className="Details-wrapper"
      // alignContent="flex-start"
      // alignItems="stretch"
      >

        {/* <Grid item xs={1}> */}

        <SideBar />

        {/* </Grid> */}

        <Grid item xs={7}>

          <TableContainer className="Details-content">
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
                      type="search"
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
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Footer />

      </Grid>
    </>
  );
}

export default Details;
