import React from 'react'
import './Footer.css';
import { Grid, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow, AppBar, Toolbar } from '@mui/material';


export default function Footer() {
  return (
    <>
      {/* <Grid
        item
        xs={12}
        // className="Details-wrapper"
        // alignContent="flex-end"
      > */}

        <AppBar
          position="sticky"
          // position="static"
          sx={{ top: 'auto', bottom: 0 }}
          className="test"
        >
          <Toolbar>
            <Button
              variant="outlined"
              className="Footer-button Footer-cancel"
            >
              Cancel
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button
              variant="contained"
              className="Footer-button"
            >
              Next
            </Button>
          </Toolbar>

        </AppBar>


      {/* </Grid> */}
    </>
  )
}
