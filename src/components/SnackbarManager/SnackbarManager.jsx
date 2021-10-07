import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, Alert, Slide } from '@mui/material';


export default function SnackbarManager() {
  //#region ⬇⬇ All state variables below:
  const dispatch = useDispatch();
  const snack = useSelector(store => store.snackBar);
  //#endregion ⬆⬆ All state variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleClose:
 * Functionality event handler for the MUI Snackbar, this will close the pop-up notification. 
 */
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    } // End if statement
    dispatch({ type: 'SET_CLOSE' })
  }; // End handleClose
  //#endregion ⬆⬆ Event handlers above. 


  // ⬇ Rendering:
  return (
    <Snackbar
      open={snack.open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        variant={snack.variant}
        onClose={handleClose}
        severity={snack.severity}
      >
        {snack.message}
      </Alert>
    </Snackbar>
  ) // End return
} // End SnackbarManager
