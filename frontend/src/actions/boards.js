import {
  BOARDS_LOADED,
  POSTS_LOADED,
} from '../constants/actionTypes';

export const getBoards = () => dispatch => {
  return fetch('/api/boards/')
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: BOARDS_LOADED,
        payload: json,
      });
    });
};

export const getBoardPosts = id => dispatch => {
  return fetch(`/api/boards/${id}`)
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: POSTS_LOADED,
        payload: json,
      });
    });
};
