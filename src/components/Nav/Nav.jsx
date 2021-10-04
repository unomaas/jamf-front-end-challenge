import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import { Grid, Typography, Avatar } from '@mui/material';


function Nav() {

  return (
    <div className="Nav-wrapper">

      <Avatar
        className="Nav-icon"
        alt="Header Logo Icon"
        src="./images/icon.png"
      />

      <Typography 
        variant="h5"
        className="Nav-header"
      >
        Add new User Profile
      </Typography>

    </div>
  ); // End return
} // End Nav()


export default Nav;
