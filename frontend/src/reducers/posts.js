import { POSTS_LOADED } from '../constants/actionTypes';

const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_LOADED:
      return action.payload;

    default:
      return state;
  }
};

export default posts;
