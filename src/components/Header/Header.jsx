//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './Header.css';
// ⬇ Dependent Functionality:
import React from 'react';
import { Typography, Avatar, AppBar, Toolbar } from '@mui/material';
//#endregion ⬆⬆ All document setup above.


export default function Header() {
  // ⬇ Rendering:
  return (

    <AppBar className="Header-wrapper" position="relative">
      <Toolbar>

        <Avatar
          className="Header-icon"
          alt="Header Logo Icon"
          src="./images/icon.png"
        />

        <Typography
          className="Header-title"
          variant="h5"
        >
          Add new User Profile
        </Typography>

      </Toolbar>
    </AppBar>
  ); // End return
} // End Nav()
