const userReducer = (state = {
  userGroupId: 0,
}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    case 'CLEAR_USER':
      return {
        userGroupId: 0,
      };
    default:
      return state;
  } // End switch
}; // End userReducer

// user will be on the redux state at:
// state.user
export default userReducer;
