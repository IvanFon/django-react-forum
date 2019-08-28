import {
  BOARDS_LOADED,
  POSTS_LOADED,
  SET_BOARD_NAME,
} from '../constants/actionTypes';

export const boards = (state = [], action) => {
  switch (action.type) {
    case BOARDS_LOADED:
      return action.payload;

    default:
      return state;
  }
};

const initBoardState = {
  name: '',
  posts: [],
};

export const board = (state = initBoardState, action) => {
  switch (action.type) {
    case POSTS_LOADED:
      return {
        ...state,
        posts: action.payload,
      };

    case SET_BOARD_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
