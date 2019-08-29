import {
  USER_LOGGED_IN,
  USER_LOGIN_ERROR,
  USER_LOGIN_START,
  USER_REGISTERED,
  USER_REGISTER_ERROR,
  USER_REGISTER_START,
} from '../constants/actionTypes';

const initRegisterState = {
  loading: false,
  success: false,
  errors: null,
};

export const register = (state = initRegisterState, action) => {
  switch (action.type) {
    case USER_REGISTER_START:
      return {
        loading: true,
        success: false,
        errors: null,
      };

    case USER_REGISTERED:
      return {
        loading: false,
        success: true,
        errors: null,
      };

    case USER_REGISTER_ERROR:
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
    case USER_LOGIN_START:
      return {
        loading: true,
        success: false,
        errors: null,
      };

    case USER_LOGGED_IN:
      return {
        loading: false,
        success: true,
        errors: null,
      };

    case USER_LOGIN_ERROR:
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
  token: '',
};

export const user = (state = initUserState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        loggedIn: true,
        ...action.payload,
      };

    default:
      return state;
  }
};
