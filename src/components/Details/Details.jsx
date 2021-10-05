import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Details.css';
import { Grid } from '@mui/material';

function Details() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();


  return (
    <Grid 
      item
      className="Details-content"
    >
      <p>Test test test</p>
      <p>Test test test</p>
      <p>Test test test</p>
    </Grid>
  );
}

export default Details;
