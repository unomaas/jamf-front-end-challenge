//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './Details.css';
// ⬇ Dependent Functionality:
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Typography } from '@mui/material';
//#endregion ⬆⬆ All document setup above.


function Details() {
  //#region ⬇⬇ All state variables below:
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();
  const dispatch = useDispatch();

  const userData = useSelector(store => store.user);

  // ⬇ Run on page load:
  // useEffect(() => {
  //   dispatch({ type: 'SET_BUTTON_STATE', payload: 'create' }),
  //     // Fetches and set all fields for dropdown menus
  //     dispatch({ type: 'FETCH_FIELD_SELECT' })
  // }, []);
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
  console.log(userData);
  return (
    <>
      <Grid
        container
        xs={7}
        className="Details-wrapper"
        alignContent="flex-start"
      >

        <Grid
          item
          xs={12}
          className="Details-content"
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            className="Details-input"
          >
            EMAIL
          </Typography>
          <TextField
            label="[Required]"
            required
            fullWidth
            onChange={event => handleChange('email', event.target.value)}
            type="search"
          />
        </Grid>

        <Grid
          item
          xs={12}
          className="Details-content"
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            className="Details-input"
          >
            PASSWORD
          </Typography>
          <TextField
            label="[Required]"
            required
            fullWidth
            onChange={event => handleChange('password', event.target.value)}
            type="password"
          />
        </Grid>

        <Grid
          item
          xs={12}
          className="Details-content"
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            className="Details-input"
          >
            VERIFY PASSWORD
          </Typography>
          <TextField
            label="[Required]"
            required
            fullWidth
            onChange={event => handleChange('password', event.target.value)}
            type="password"
          />
        </Grid>

      </Grid>
    </>
  );
}

export default Details;
