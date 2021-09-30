import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';


function Nav() {


  return (
    <div className="nav">
      <span>
        <h2 className="nav-title">Add new User Profile</h2>
      </span>
    </div>
  );
}

export default Nav;
