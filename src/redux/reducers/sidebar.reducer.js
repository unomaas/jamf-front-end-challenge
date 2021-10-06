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
