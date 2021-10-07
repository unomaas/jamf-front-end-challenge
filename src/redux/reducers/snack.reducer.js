const snackReducer = (state = {
  open: false,
  message: '',
  severity: "success"
}, action) => {
  switch (action.type) {
    case 'SET_CLOSE':
      return { ...state, open: false }
    case 'GET_SUCCESS_NEXT_DETAILS':
      return {
        open: true,
        message: 'Your email address and password have been saved!',
        severity: "success",
        variant: 'filled'
      }
    default:
      return state;
  }
};

export default snackReducer;
