import {
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
