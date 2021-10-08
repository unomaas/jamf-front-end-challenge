//#region ⬇⬇ All document setup, below:
// ⬇ File Imports: 
import './Footer.css';
// ⬇ Dependent Functionality:
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableRow, AppBar, Toolbar } from '@mui/material';
//#endregion ⬆⬆ All document setup above.


export default function Footer() {
  //#region ⬇⬇ All state variables below:
  const history = useHistory();
  const dispatch = useDispatch();
  const sidebarState = useSelector(store => store.sidebar);
  //#endregion ⬆⬆ All state variables above. 

  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleCancel:
   * When the user clicks Cancel, it will reset the userData reducer, send them to the landing page, and then tell them so. 
   */
  const handleCancel = () => {
    // ⬇ Clears the userData reducer:
    dispatch({ type: "CLEAR_USER" });
    // ⬇ Sends the user back to the landing page:
    history.push(`/details`);
    // ⬇ Snackbar Alert to show success:
    dispatch({ type: 'GET_SUCCESS_CANCEL' });
  } // End handleCancel

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
                      {/* ⬇ Conditional rendering to show Submit if we're on the final page of the wizard: */}
                      {sidebarState[2] == "success" ?
                        (<>Submit</>) : (<>Next</>)
                      }
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
