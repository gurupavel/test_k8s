import {call, put, takeEvery} from 'redux-saga/effects';
import {
  SIGN_UP_PENDING,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_PENDING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  REQUEST_NEW_PASSWORD_PENDING,
  REQUEST_NEW_PASSWORD_SUCCESS,
  REQUEST_NEW_PASSWORD_ERROR,
  SET_NEW_PASSWORD_PENDING,
  SET_NEW_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD_ERROR,
  CONTACT_ADMIN_PENDING,
  CONTACT_ADMIN_SUCCESS,
  CONTACT_ADMIN_ERROR,
  CREATE_PASSWORD_PENDING,
  CREATE_PASSWORD_SUCCESS,
  CREATE_PASSWORD_ERROR
} from '../actions/actionTypes';
import {toast} from "react-toastify";

import {signUpApi, signInApi, requestNewPasswordApi, setNewPasswordApi, contactAdminApi, createPasswordApi} from '../api/authApi';
import localStorage from "local-storage";


export function* signUp(data) {
  const response = yield call(signUpApi, data.payload);
  // console.log(JSON.parse(response.data));
  if (response.data.indexOf('200') !== -1) { //JSON.parse(response.data).code === 200
    yield put({type: SIGN_UP_SUCCESS});

    toast.success('Successfully! Please check your email');
    // this.props.history.push('/home');
  } else {
    yield put({type: SIGN_UP_ERROR, payload: 'Invalid email'});
  }
}

export function* signIn(data) {
  const response = yield call(signInApi, data.payload);
  // console.log(JSON.parse(response.data));
  if (response.data.indexOf('200') !== -1) { //JSON.parse(response.data).code === 200
    yield put({type: SIGN_IN_SUCCESS});

    toast.success('You\'re now logged in!');

    localStorage.set('isAuth', 'true');
    localStorage.set('loginTime', new Date());

    // this.props.history.push('/home');
  } else {
    yield put({type: SIGN_IN_ERROR, payload: 'Invalid email'});
  }
}

export function* requestNewPassword(data) {
  const response = yield call(requestNewPasswordApi, data.payload);
  // console.log(JSON.parse(response.data));
  if (response.data.indexOf('200') !== -1) { //JSON.parse(response.data).code === 200
    yield put({type: REQUEST_NEW_PASSWORD_SUCCESS});

    toast.success('Successfully! Please check your email');

    // this.props.history.push('/login');
  } else {
    yield put({type: REQUEST_NEW_PASSWORD_ERROR, payload: 'Invalid email'});
  }
}

export function* setNewPassword(data) {
  const response = yield call(setNewPasswordApi, data.payload);
  // console.log(JSON.parse(response.data));
  if (response.data.indexOf('200') !== -1) { //JSON.parse(response.data).code === 200
    yield put({type: SET_NEW_PASSWORD_SUCCESS});

    toast.success('Successfully! Password was changed');
    // this.props.history.push('/home');
  } else {
    yield put({type: SET_NEW_PASSWORD_ERROR, payload: 'Invalid email'});
  }
}

export function* contactAdmin(data) {
  const response = yield call(contactAdminApi, data.payload);
  // console.log(JSON.parse(response.data));
  if (response.data.indexOf('200') !== -1) { //JSON.parse(response.data).code === 200
    yield put({type: CONTACT_ADMIN_SUCCESS});

    toast.success('Thank you for your message!');
    // this.props.history.push('/home');
  } else {
    yield put({type: CONTACT_ADMIN_ERROR, payload: 'Invalid email'});
  }
}

export function* createPassword() {
  try {
    yield call(createPasswordApi);
    yield put({type: CREATE_PASSWORD_SUCCESS});
  } catch (e) {
    yield put({type: CREATE_PASSWORD_ERROR, payload: 'Invalid email'});
  }
}

/**
 * Connect actions to generators
 */
function* authSaga() {
  yield takeEvery(SIGN_UP_PENDING, signUp);
  yield takeEvery(SIGN_IN_PENDING, signIn);
  yield takeEvery(REQUEST_NEW_PASSWORD_PENDING, requestNewPassword);
  yield takeEvery(SET_NEW_PASSWORD_PENDING, setNewPassword);
  yield takeEvery(CONTACT_ADMIN_PENDING, contactAdmin);
  yield takeEvery(CREATE_PASSWORD_PENDING, createPassword);
}

export default authSaga;
