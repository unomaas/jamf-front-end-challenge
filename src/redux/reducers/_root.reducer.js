// ⬇ rootReducer is the primary reducer for our entire project.  It bundles up all of the other reducers so our project can use them.  This is imported in index.js as rootSaga.

// ⬇ File Imports: 
import { combineReducers } from 'redux';
import user from './user.reducer';
import sidebar from './sidebar.reducer';
import userGroups from './usergroup.reducer';
import snackBar from './snack.reducer';

// ⬇ Lets make a bigger object for our store, with the objects from our reducers. This is what we get when we use 'state' inside of 'mapStateToProps':
const rootReducer = combineReducers({
  user, // ⬅ Will contain all the user data the user enters.
  sidebar, // ⬅ Will set the circle to green on the sidebar. 
  userGroups, // ⬅ Will get the User Group dropdown selections. 
  snackBar, // ⬅ Is the reducer data for snackbar alerts. 
}); // End rootREducer


export default rootReducer;