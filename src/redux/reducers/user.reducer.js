// ⬇ This reducer handles the data storage for everything the user enters and will display it on the Submit page:

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

// ⬇ User will be on the redux state at: state.user
export default userReducer;
