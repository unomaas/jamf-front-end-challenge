const snackReducer = (state = {
  open: false,
  message: '',
  severity: "success"
}, action) => {
  switch (action.type) {
    case 'SET_CLOSE':
      return { ...state, open: false }
    case 'GET_SUCCESS_DETAILS':
      return {
        open: true,
        message: 'Your email and password have been saved!',
        severity: "success",
        variant: 'filled'
      }
    case 'GET_SUCCESS_USERGROUPS':
      return {
        open: true,
        message: 'Your User Group has been saved!',
        severity: "success",
        variant: 'filled'
      }
    case 'GET_ERROR_SUBMIT':
      return {
        open: true,
        message: 'You must fill out the prior forms of the wizard to be able to Submit!  Please start again.',
        severity: "error",
        variant: 'filled'
      }
    case 'GET_SUCCESS_SUBMIT':
      return {
        open: true,
        message: 'Congratulations!  You have successfully completed the wizard.  You may now close this window, or add another User Profile.',
        severity: "success",
        variant: 'filled'
      }
    case 'GET_SUCCESS_CANCEL':
      return {
        open: true,
        message: 'The forms have been reset and you are now able to start over.',
        severity: "info",
        variant: 'filled'
      }
    default:
      return state;
  }
};

export default snackReducer;
