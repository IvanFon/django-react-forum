import { BOARDS_LOADED } from '../constants/actionTypes';

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
