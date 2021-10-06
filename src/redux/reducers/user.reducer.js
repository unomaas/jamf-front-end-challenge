const userReducer = (state = {
  email: "[Required]",
  password: "[Required]",
  verify: "[Required]"
}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    case 'CLEAR_USER':
      return {
        email: "[Required]",
        password: "[Required]",
        verify: "[Required]"
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
