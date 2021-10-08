// ⬇ This saga handles the User Group dropdown selection options, which are sent to our usergroup.reducer.js file. 

// ⬇ File Imports: 
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// ⬇ Master userGroupSaga function: 
function* userGroupSaga() {
  yield takeLatest('FETCH_USER_GROUPS', fetchUserGroups);
}

// ⬇ fetchUserGroup saga function:
function* fetchUserGroups() {
  try {
    // ⬇ Fetching the User Groups from the DB: 
    const response = yield axios.get(`/api/userGroups`);
    // ⬇ Sending the results to User Groups reducer: 
    yield put({ type: 'SET_USER_GROUPS', payload: response.data });
  } catch (error) {
    console.log('fetchUserGroups Saga Error:', error);
  } // End try/catch block
} // End fetchUserGroups


export default userGroupSaga;