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
    default:
      return state;
  }
};

export default snackReducer;
