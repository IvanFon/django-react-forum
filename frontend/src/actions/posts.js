import {
  COMMENTS_LOADED,
  POST_LOADED,
} from '../constants/actionTypes'

export const getPost = id => dispatch => {
  return fetch(`/api/post/${id}`)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: POST_LOADED,
        payload: json,
      });
    });
};

export const getComments = postId => dispatch => {
  return fetch(`/api/post/${postId}/comments`)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: COMMENTS_LOADED,
        payload: json,
      });
    });
}
