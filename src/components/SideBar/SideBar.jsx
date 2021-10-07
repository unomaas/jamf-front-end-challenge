//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './SideBar.css';
// ⬇ Dependent Functionality:
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Stack, Chip, Typography, Grid, SvgIcon, Box, Container, Avatar } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
//#endregion ⬆⬆ All document setup above.


export default function SideBar() {
  //#region ⬇⬇ All state variables below:

  const circleColor = useSelector(store => store.sidebar);


  // ⬇ Run on page load:
  // useEffect(() => {
  //   dispatch({ type: 'SET_BUTTON_STATE', payload: 'create' }),
  //     // Fetches and set all fields for dropdown menus
  //     dispatch({ type: 'FETCH_FIELD_SELECT' })
  // }, []);
  //#endregion ⬆⬆ All state variables above. 

  //#region ⬇⬇ Event handlers below:
  //#endregion ⬆⬆ Event handles above. 

  // ⬇ Rendering:
  console.log(circleColor);
  return (
    <Grid
      container
      item
      xs={1}
      className="SideBar-wrapper"
      alignItems="stretch"
    >

      <Grid
        item
        xs={12}
        className="SideBar-content"
      >
        <Typography
          className="SideBar-text"
          variant="p"
        >
          <CircleIcon
            className="SideBar-circle"
            color={circleColor[0]}
          />
          Add login details
        </Typography>

        <br /> <br />

        <Typography
          className="SideBar-text"
          variant="p"
        >
          <CircleIcon
            className="SideBar-circle"
            color={circleColor[1]}
          />
          Select the user group
        </Typography>

        <br /> <br />

        <Typography
          className="SideBar-text"
          variant="p"
        >
          <CircleIcon
            className="SideBar-circle"
            color={circleColor[2]}
          />
          Submit the form
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        className="SideBar-image-wrapper"
      >
        <Avatar
          className="SideBar-image"
          alt="Side Bar Logo Image"
          src="./images/app-icon.png"
        />
      </Grid>

    </Grid>

  )
}
