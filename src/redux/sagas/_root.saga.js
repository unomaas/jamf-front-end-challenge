// ⬇ rootSaga is the primary saga.  It bundles up all of the other sagas so our project can use them. This is imported in index.js as rootSaga

// ⬇ File Imports: 
import { all } from 'redux-saga/effects';
import userGroupSaga from './usergroup.saga';

export default function* rootSaga() {
  yield all([
    userGroupSaga(), // ⬅ Will get the User Group dropdown selections. 
  ]);
}
