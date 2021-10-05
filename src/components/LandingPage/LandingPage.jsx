import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Grid } from '@mui/material';
import SideBar from '../SideBar/SideBar';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();


  return (
    <div className="LandingPage-wrapper">


      <Grid container spacing={0}>

        <Grid item>
          <SideBar />

        </Grid>

        <Grid
          item
        >
          <p>Test test test</p>
          <p>Test test test</p>
          <p>Test test test</p>
        </Grid>
      </Grid>

    </div>
  );
}

export default LandingPage;
