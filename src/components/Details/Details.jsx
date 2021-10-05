import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Details.css';
import { Grid, TextField } from '@mui/material';

function Details() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();


  return (
    <Grid 
      container 
      xs={10} 
      className="Details-wrapper"
    >
      <Grid
        item 
        xs={12}
        className="Details-content"
      >
        <TextField
          required
          // style={{width: '95%'}}
          fullWidth
        // onChange={event => handleChange('square_feet', event.target.value)}
        // required
        // type="number"
        // size="small"
        // fullWidth
        // InputProps={{
        //   endAdornment: <InputAdornment position="end">ft²</InputAdornment>,
        // }}
        // value={estimateData.square_feet}

        />
      </Grid>
    </Grid>
  );
}

export default Details;
