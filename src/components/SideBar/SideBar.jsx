import React from 'react'
import './SideBar.css';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { theme } from '../MuiStyling/MuiStyling';


export default function SideBar() {
  // const classes = useStyles();

  return (
    <div className="SideBar-wrapper">

      <div className="SideBar-content">
        <ToggleButtonGroup
          orientation="vertical"
          fullWidth
          exclusive
        >
          <ToggleButton >
            Add login details
          </ToggleButton>
          <ToggleButton className="SideBar-buttons">
            Select the user group
          </ToggleButton >
          <ToggleButton className="SideBar-buttons">
            Submit the form
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="SideBar-icon">

      </div>

    </div>
  )
}
