import React from 'react'
import './SideBar.css';
import { ToggleButtonGroup, ToggleButton, Stack, Chip, Typography, Grid, SvgIcon, Box, Container, Avatar } from '@mui/material';
import { theme } from '../MuiStyling/MuiStyling';
// import { CircleIcon } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';


export default function SideBar() {
  // const classes = useStyles();

  return (

    <Grid
      container
      xs={1}
      className="SideBar-wrapper"
      // direction="column"
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
            color="success"
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
            color="action"
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
            color="action"
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
