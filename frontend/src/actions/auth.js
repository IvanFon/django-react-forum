import axios from 'axios';

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_PENDING,
  USER_REGISTER_SUCCESS,
} from '../constants/actionTypes';

export const registerUser = (username, password) => dispatch => {
  dispatch({ type: USER_REGISTER_PENDING, });

  axios({
    url: '/api/users/register/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      username,
      password,
    }),
  }).then(res => {
    dispatch({
      type: USER_REGISTER_SUCCESS,
    });
  }).catch(err => {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: err.response.data,
    });
  });
};

export const loginUser = (username, password) => dispatch => {
  dispatch({ type: USER_LOGIN_PENDING, });

  axios({
    url: '/api/users/token/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      username,
      password,
    }),
  }).then(res => {
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: {
        ...res.data,
        username,
      },
    });
  }).catch(err => {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err.response.data,
    });
  });
};

export const logoutUser = () => dispatch => {
  dispatch({ type: USER_LOGOUT });
};
