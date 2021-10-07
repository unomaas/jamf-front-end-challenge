const userGroupReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_GROUPS':      
      return action.payload;
    default:
      return state;
  } // End switch
}; // End userGroupReducer

export default userGroupReducer;
