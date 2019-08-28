import {
  BOARDS_LOADED,
  POSTS_LOADED,
} from '../constants/actionTypes';

const boards = (state = [], action) => {
  switch (action.type) {
    case BOARDS_LOADED:
      return action.payload;

    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_LOADED:
      return action.payload;

    default:
      return state;
  }
};

export { boards, posts };
