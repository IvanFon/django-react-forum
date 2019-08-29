import axios from 'axios';

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
import store from '../store';

// Add authentication headers to requests when logged in
axios.interceptors.request.use(config => {
  const user = store.getState().user;
  if (user.loggedIn) {
    config.headers['Authorization'] = 'Bearer ' + user.access;
  }
  return config;
});

// Include username with responses
axios.interceptors.response.use(res => {
  res.data.username = store.getState().user.username;
  return res;
});

// Automatically refresh auth tokens
function createResInterceptor() {
  const interceptor = axios.interceptors.response.use(res => res, err => {
    if (err.response.status !== 401) {
      return Promise.reject(err);
    }

    // Refresh token
    // Eject first to prevent refresh loop
    axios.interceptors.response.eject(interceptor);

    return axios({
      url: '/api/users/token/refresh/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        refresh: store.getState().user.refresh,
      }),
    }).then(res => {
      const new_tokens = res.data;
      store.dispatch({
        type: USER_REFRESH_TOKEN,
        payload: new_tokens,
      });
      err.response.config.headers['Authorization'] = 'Bearer ' +
                                                     new_tokens.access;
      return axios(err.response.config);
    }).catch(err => {
      console.log(err);
      store.dispatch({
        type: USER_LOGOUT,
      });
      return Promise.reject(err);
    }).finally(createResInterceptor);
  });
}
createResInterceptor();

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
