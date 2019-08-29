import axios from 'axios';

import {
  USER_LOGOUT,
  USER_REFRESH_TOKEN,
} from './constants/actionTypes';
import store from './store';

// Add authentication headers to requests when user is logged in
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
    // Eject this interceptor first to prevent refresh loop
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

      // Retry request with new access token
      err.response.config.headers['Authorization'] = 'Bearer ' +
                                                     new_tokens.access;
      return axios(err.response.config);
    }).catch(err => {
      store.dispatch({
        type: USER_LOGOUT,
      });
      return Promise.reject(err);
    }).finally(createResInterceptor);
  });
}
// Create initial interceptor
createResInterceptor();
