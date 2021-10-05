import React from 'react'
import './SideBar.css';
import { ToggleButtonGroup, ToggleButton, Stack, Chip, Typography, Grid, SvgIcon } from '@mui/material';
import { theme } from '../MuiStyling/MuiStyling';
// import { CircleIcon } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';


export default function SideBar() {
  // const classes = useStyles();

  return (
    <div className="SideBar-wrapper">

      <div className="SideBar-content">
        <Grid
          container
          direction="column"
          spacing={3}
        >

          <Grid item xs={12}>
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
          </Grid>

          <Grid item xs={12}>
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
          </Grid>

          <Grid item xs={12}>
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

          {/* <Stack spacing={2} alignItems="center" justifyContent="center">

            <Typography
              variant="p"
              className="SideBar-text"
              alignItems="center"
              justifyContent="center"
            >
              <CircleIcon
                color="success"
                className="SideBar-circle"
              />
              Add login details
            </Typography>

            <Typography
              variant="p"
              className="SideBar-text"
            >
              <CircleIcon
                color="action"
                className="SideBar-circle"
              />
              Select the user group
            </Typography>

            <Typography
              variant="p"
              className="SideBar-text"
            >
              <CircleIcon
                color="action"
                className="SideBar-circle"
              />
              Add login details
            </Typography>

          </Stack> */}
        </Grid>
      </div>

      <div className="SideBar-icon">
      </div>

    </div>
  )
}
