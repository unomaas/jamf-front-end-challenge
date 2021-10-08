// ⬇ This reducer handles the state of the sidebar buttons, which indicate which page the user is on.  Action is grayed out, while Success is green. 

const sidebarReducer = (state = [
  "action",
  "action",
  "action"
], action) => {
  switch (action.type) {
    case 'SET_SIDEBAR':
      return action.payload;
    case 'CLEAR_SIDEBAR':
      return [
        "action",
        "action",
        "action"
      ];
    default:
      return state;
  } // End switch
}; // End sidebarReducer

export default sidebarReducer;
