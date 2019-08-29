import axios from 'axios';

import {
  COMMENTS_LOADED,
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
}
