import {
  USER_LOGIN_FAIL,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REFRESH_TOKEN,
  USER_REGISTER_FAIL,
  USER_REGISTER_PENDING,
  USER_REGISTER_SUCCESS,
} from '../constants/actionTypes';

const initRegisterState = {
  loading: false,
  success: false,
  errors: null,
};

export const register = (state = initRegisterState, action) => {
  switch (action.type) {
    case USER_REGISTER_PENDING:
      return {
        loading: true,
        success: false,
        errors: null,
      };

    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        success: true,
        errors: null,
      };

    case USER_REGISTER_FAIL:
      return {
        loading: false,
        success: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

const initLoginState = {
  loading: false,
  success: false,
  errors: null,
};

export const login = (state = initLoginState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return {
        loading: true,
        success: false,
        errors: null,
      };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        success: true,
        errors: null,
      };

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        success: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

const initUserState = {
  loggedIn: false,
  username: '',
  refresh: '',
  access: '',
};

export const user = (state = initUserState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        ...action.payload,
      };

    case USER_LOGOUT:
      return initUserState;

    case USER_REFRESH_TOKEN:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
