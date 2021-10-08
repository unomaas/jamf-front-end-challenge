//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './Details.css';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
// ⬇ Dependent Functionality:
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableRow, FormHelperText, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//#endregion ⬆⬆ All document setup above.


export default function Details() {
  //#region ⬇⬇ All state variables below:
  const history = useHistory();
  const dispatch = useDispatch();
  // ⬇ Pulling in the userData reducer from the Redux store:
  const userData = useSelector(store => store.user);
  // ⬇ State variable to show a validation error for passwords: 
  const [validationError, setValidationError] = useState("");
  // ⬇ State variable to show passwords or not: 
  const [showPassword, setShowPassword] = useState(false);
  // ⬇ Run on page load:
  useEffect(() => {
    // ⬇ Will set the color of the sidebar circles to indicate the page:
    dispatch({ type: 'SET_SIDEBAR', payload: ['success', 'action', 'action'] })
  }, []); // ⬅ Run only once. 
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleChange:
   * When the user types, this will set their input to the userData object with keys for each field. 
   */
  const handleChange = (key, value) => {
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
    // ⬇ Don't refresh until submit:
    event.preventDefault();
    // ⬇ Resetting form validation:
    setValidationError("");
    // ⬇ Password validation to ensure passwords match:
    if (userData.password !== userData.verify) {
      // ⬇ If they don't match, show this error:
      setValidationError("* Your passwords must match to continue.");
    } else {
      // ⬇ If they do match, send the user to the next page:
      history.push(`/usergroup`);
      // ⬇ Snackbar Alert to show success:
      dispatch({ type: 'GET_SUCCESS_DETAILS' });
    } // End if/else validation. 
  } // End handleSubmit
  //#endregion ⬆⬆ Event handlers above. 


  // ⬇ Rendering:
  return (
    <div className="Details-wrapper">

      <form onSubmit={handleSubmit}>
        <Grid container>

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
                        // ⬇ Conditional rendering to show text or password, for accessibility on the verification process: 
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                          endAdornment:
                            <InputAdornment position="end">
                              <IconButton
                                onClick={event => setShowPassword(!showPassword)}
                              >
                                {/* ⬇ Conditional rendering to show Visible or Not Visible passwords, for accessibility: */}
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                        }}
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
                        // ⬇ Conditional rendering to show text or password, for accessibility on the verification process: 
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                          endAdornment:
                            <InputAdornment position="end">
                              <IconButton
                                onClick={event => setShowPassword(!showPassword)}
                              >
                                {/* ⬇ Conditional rendering to show Visible or Not Visible passwords, for accessibility: */}
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                        }}
                      />
                      <FormHelperText sx={{ color: 'red' }}>{validationError}</FormHelperText>
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

    </div >
  ); // End return
} // End Details