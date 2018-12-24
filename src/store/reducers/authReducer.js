import {
  SIGN_UP_SUCCESS, SIGN_UP_ERROR,
  SIGN_IN_SUCCESS, SIGN_IN_ERROR,
  SET_NEW_PASSWORD_SUCCESS, SET_NEW_PASSWORD_ERROR,
  REQUEST_NEW_PASSWORD_SUCCESS, REQUEST_NEW_PASSWORD_ERROR,
  CONTACT_ADMIN_SUCCESS, CONTACT_ADMIN_ERROR,
  CREATE_PASSWORD_SUCCESS, CREATE_PASSWORD_ERROR
} from '../../actions/actionTypes';


const initialState = {
  isAuth: false,
  emailError: '',
  passwordError: '',
  modalVisibility: false
};

const authReducer = (state = initialState, action) => {
  let {type, payload} = action;

  switch (type) {

    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case SIGN_UP_ERROR: {
      return {
        ...state,
        emailError: payload,
      };
    }

    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case SIGN_IN_ERROR: {
      return {
        ...state,
        emailError: payload,
      };
    }


    case REQUEST_NEW_PASSWORD_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case REQUEST_NEW_PASSWORD_ERROR: {
      return {
        ...state,
        emailError: payload,
      };
    }


    case SET_NEW_PASSWORD_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case SET_NEW_PASSWORD_ERROR: {
      return {
        ...state,
        passwordError: payload,
      };
    }


    case CONTACT_ADMIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case CONTACT_ADMIN_ERROR: {
      return {
        ...state,
        emailError: payload,
      };
    }


    case CREATE_PASSWORD_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case CREATE_PASSWORD_ERROR: {
      return {
        ...state,
        emailError: payload,
      };
    }


    default:
      return state;
  }
};

export default authReducer;
