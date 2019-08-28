import { POSTS_LOADED } from '../constants/actionTypes';

export const getPosts = boardId => dispatch => {
  return fetch(`/api/board/${boardId}`)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: POSTS_LOADED,
        payload: json,
      });
    });
}
