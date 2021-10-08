// ⬇ This reducer handles the User Group dropdown selection options, which are loaded from a GET request via our usergroup.saga.js file. 

const userGroupReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USER_GROUPS':      
      return action.payload;
    default:
      return state;
  } // End switch
}; // End userGroupReducer


export default userGroupReducer;