import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* userGroupSaga() {
  yield takeLatest('FETCH_USER_GROUPS', fetchUserGroups);
}

function* fetchUserGroups() {
  try {
    // ⬇ Fetching the User Groups from the DB: 
    const response = yield axios.get(`/api/userGroups`);
    // ⬇ Sending the results to User Groups reducer: 
    yield put({ type: 'SET_USER_GROUPS', payload: response.data });
  } catch (error) {
    console.log('fetchUserGroups Saga Error:', error);
  }
}

export default userGroupSaga;
