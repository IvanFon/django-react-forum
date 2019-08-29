import axios from 'axios';

import {
  COMMENTS_LOADED,
  NEW_COMMENT_CLEAR,
  NEW_COMMENT_FAIL,
  NEW_COMMENT_PENDING,
  NEW_COMMENT_SUCCESS,
} from '../constants/actionTypes';

export const getComments = postId => dispatch => {
  axios.get(`/api/post/${postId}/comments`)
    .then(res => {
      dispatch({
        type: COMMENTS_LOADED,
        payload: res.data,
      });
    });
};

export const clearNewComment = () => ({
  type: NEW_COMMENT_CLEAR,
});

export const createComment = ({ postId, text }) => dispatch => {
  dispatch({ type: NEW_COMMENT_PENDING, });

  axios({
    url: `/api/post/${postId}/comments/`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ text }),
  }).then(res => {
    dispatch({
      type: NEW_COMMENT_SUCCESS,
      payload: res.data,
    });
    dispatch({
      type: NEW_COMMENT_CLEAR,
    });
  }).catch(err => {
    dispatch({
      type: NEW_COMMENT_FAIL,
      payload: err.response.data,
    });
  });
};
