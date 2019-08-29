import {
  USER_LOGIN_FAIL,
  USER_LOGIN_PENDING,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_PENDING,
  USER_REGISTER_SUCCESS,
} from '../constants/actionTypes';

export const registerUser = (username, password) => dispatch => {
  dispatch({ type: USER_REGISTER_PENDING, });

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
          type: USER_REGISTER_SUCCESS,
        });
      } else {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: data.body,
        });
      }
    });
};

export const loginUser = (username, password) => dispatch => {
  dispatch({ type: USER_LOGIN_PENDING, });

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
          type: USER_LOGIN_SUCCESS,
          payload: {
            username,
            token: data.body.token,
          },
        });
      } else {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: data.body,
        });
      }
    });
}
