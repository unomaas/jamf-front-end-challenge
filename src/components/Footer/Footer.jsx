import React from 'react'
import './Footer.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, TextField, Typography, Button, Table, TableBody, TableCell, TableContainer, TableRow, AppBar, Toolbar } from '@mui/material';


export default function Footer() {
  //#region ⬇⬇ All state variables below:
  const history = useHistory();
  const dispatch = useDispatch();
  //#endregion ⬆⬆ All state variables above. 

  const handleCancel = () => {
    console.log('In handleChange');
    // ⬇ Clears the user data reducer:
    dispatch({ type: "CLEAR_USER" });
    // ⬇ Sends the user back to the landing page:
    history.push(`/details`);
  } // End handleChange

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
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>

                    <Button
                      variant="contained"
                      className="Footer-button"
                      size="large"
                      type="submit"
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
