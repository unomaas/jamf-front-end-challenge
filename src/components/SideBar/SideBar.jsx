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
        <Stack spacing={2}>

          <Typography variant="p">
            <CircleIcon
              color="success"
              className="SideBar-circle"
            />
            Add login details
          </Typography>

          <Typography variant="p">
            <CircleIcon
              color="action"
              className="SideBar-circle"
            />
            Select the user group
          </Typography>

          <Typography variant="p">
            <CircleIcon
              color="action"
              className="SideBar-circle"
            />
            Add login details
          </Typography>

        </Stack>
      </div>

      <div className="SideBar-icon">
      </div>

    </div>
  )
}
