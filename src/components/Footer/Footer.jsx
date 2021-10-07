import React from 'react'
import './Footer.css';
import { Grid, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow, AppBar, Toolbar } from '@mui/material';


export default function Footer() {
  return (
    <>
      <AppBar
        sx={{ top: 'auto', bottom: 0 }}
        className="Footer-wrapper"
      >
        <Toolbar>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    align="right"
                    sx={{ borderBottom: "none" }}
                  >
                    <Button
                      variant="outlined"
                      className="Footer-button Footer-cancel"
                      size="large"
                    >
                      Cancel
                    </Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button
                      variant="contained"
                      className="Footer-button"
                      size="large"
                    >
                      Next
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
