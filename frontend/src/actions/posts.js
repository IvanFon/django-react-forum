import axios from 'axios';

import {
  COMMENTS_LOADED,
  NEW_POST_CLEAR,
  NEW_POST_FAIL,
  NEW_POST_PENDING,
  NEW_POST_SUCCESS,
  POST_LOADED,
} from '../constants/actionTypes'

export const getPost = id => dispatch => {
  axios.get(`/api/post/${id}`)
    .then(res => {
      dispatch({
        type: POST_LOADED,
        payload: res.data,
      });
    });
};

export const getComments = postId => dispatch => {
  axios.get(`/api/post/${postId}/comments`)
    .then(res => {
      dispatch({
        type: COMMENTS_LOADED,
        payload: res.data,
      });
    });
};

export const clearNewPost = () => ({
  type: NEW_POST_CLEAR,
});

export const createPost = ({ board, title, text }) => dispatch => {
  dispatch({ type: NEW_POST_PENDING, });

  axios({
    url: '/api/post/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      board: Number(board),
      title,
      text,
    }),
  }).then(res => {
    dispatch({
      type: NEW_POST_SUCCESS,
      payload: res.data.id,
    });
  }).catch(err => {
    dispatch({
      type: NEW_POST_FAIL,
      payload: err.response.data,
    });
  });
};
