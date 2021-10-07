import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { Grid, Typography, Avatar } from '@mui/material';


export default function Header() {

  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center" 
      className="Header-wrapper"
    >

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

    </Grid>
  ); // End return
} // End Nav()
