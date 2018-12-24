import {fork} from 'redux-saga/effects';
import {all} from 'redux-saga/effects';
import authSaga from './authSaga';

/**
 * Combine sagas
 */
export default function * rootSaga () {
  yield all([
    fork(authSaga),
  ]);
}
