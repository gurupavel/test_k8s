import {
  SIGN_IN_PENDING, SIGN_UP_PENDING,
  REQUEST_NEW_PASSWORD_PENDING, SET_NEW_PASSWORD_PENDING,
  CONTACT_ADMIN_PENDING, CREATE_PASSWORD_PENDING
} from './actionTypes';


export const logIn = (payload) => {
  console.log('tabi');
  return (dispatch) => {
    dispatch({type: SIGN_IN_PENDING, payload});
  };
}

export const signUp = (payload) => {
  return (dispatch) => {
    dispatch({type: SIGN_UP_PENDING, payload});
  };
}

export const requestNewPassword = (payload) => {
  return (dispatch) => {
    dispatch({type: REQUEST_NEW_PASSWORD_PENDING, payload});
  };
}

export const setNewPassword = (payload) => {
  return (dispatch) => {
    dispatch({type: SET_NEW_PASSWORD_PENDING, payload});
  };
}

export const contactAdmin = (payload) => {
  return (dispatch) => {
    dispatch({type: CONTACT_ADMIN_PENDING, payload});
  };
}

export const createPassword = (payload) => {
  return (dispatch) => {
    dispatch({type: CREATE_PASSWORD_PENDING, payload});
  };
}
