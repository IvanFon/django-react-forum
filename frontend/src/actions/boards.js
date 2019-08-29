import axios from 'axios';

import {
  BOARDS_LOADED,
  POSTS_LOADED,
  SET_BOARD_NAME,
} from '../constants/actionTypes';

export const getBoards = () => dispatch => {
  axios.get('/api/boards')
    .then(res => {
      dispatch({
        type: BOARDS_LOADED,
        payload: res.data,
      });
    });
};

export const setBoardName = name => ({
  type: SET_BOARD_NAME,
  payload: name,
});

export const getBoardPosts = id => dispatch => {
  axios.get(`/api/boards/${id}`)
    .then(res => {
      dispatch({
        type: POSTS_LOADED,
        payload: res.data,
      });
    });
};
