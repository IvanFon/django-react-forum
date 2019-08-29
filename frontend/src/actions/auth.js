import {
  USER_LOGGED_IN,
  USER_LOGIN_ERROR,
  USER_LOGIN_START,
  USER_REGISTERED,
  USER_REGISTER_ERROR,
  USER_REGISTER_START,
} from '../constants/actionTypes';

export const registerUser = (username, password) => dispatch => {
  dispatch({ type: USER_REGISTER_START, });

  return fetch('/api/users/register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(res => res.json()
      .then(json => ({
        status: res.status,
        body: json,
      }))
    )
    .then(data => {
      if (data.status === 201) {
        dispatch({
          type: USER_REGISTERED,
        });
      } else {
        dispatch({
          type: USER_REGISTER_ERROR,
          payload: data.body,
        });
      }
    });
};

export const loginUser = (username, password) => dispatch => {
  dispatch({ type: USER_LOGIN_START, });

  return fetch('/api/users/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(res => res.json()
      .then(json => ({
        status: res.status,
        body: json,
      }))
    )
    .then(data => {
      if (data.status === 200) {
        dispatch({
          type: USER_LOGGED_IN,
          payload: {
            username,
            token: data.body.token,
          },
        });
      } else {
        dispatch({
          type: USER_LOGIN_ERROR,
          payload: data.body,
        });
      }
    });
}
