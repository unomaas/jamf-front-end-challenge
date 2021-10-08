//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './SideBar.css';
import CircleIcon from '@mui/icons-material/Circle';
// ⬇ Dependent Functionality:
import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid, Avatar, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
//#endregion ⬆⬆ All document setup above.


export default function SideBar() {
  //#region ⬇⬇ All state variables below:
  // ⬇ State variable which will change the color to indicate which step the user is on:
  const circleColor = useSelector(store => store.sidebar);
  //#endregion ⬆⬆ All state variables above. 


  // ⬇ Rendering:
  return (
    <Grid
      item
      xs={1}
      className="SideBar-wrapper"
    >

      <TableContainer className="SideBar-content">
        <Table>
          <TableBody>

            <TableRow >
              <TableCell className="SideBar-cell">
                <Typography
                  className="SideBar-text"
                  variant="p"
                >
                  <CircleIcon
                    className="SideBar-circle"
                    color={circleColor[0]}
                  />
                  Add login details
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="SideBar-cell">
                <Typography
                  className="SideBar-text"
                  variant="p"
                >
                  <CircleIcon
                    className="SideBar-circle"
                    color={circleColor[1]}
                  />
                  Select the user group
                </Typography>

              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="SideBar-cell">
                <Typography
                  className="SideBar-text"
                  variant="p"
                >
                  <CircleIcon
                    className="SideBar-circle"
                    color={circleColor[2]}
                  />
                  Submit the form
                </Typography>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>

      <div className="SideBar-image-wrapper">
        <Avatar
          className="SideBar-image"
          alt="Side Bar Logo Image"
          src="./images/app-icon.png"
        />
      </div>

    </Grid>
  ) // End return
} // End SideBar
