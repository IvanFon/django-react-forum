import {
  COMMENTS_LOADED,
  POST_LOADED,
} from '../constants/actionTypes';

const initPostState = {
  id: -1,
  author: '',
  title: '',
  text: '',
  date: '',
};

export const post = (state = initPostState, action) => {
  switch (action.type) {
    case POST_LOADED:
      return {
        ...action.payload,
        date: action.payload.date_added,
      };

    default:
      return state;
  }
};

export const comments = (state = [], action) => {
  switch (action.type) {
    case COMMENTS_LOADED:
      return action.payload;

    default:
      return state;
  }
};
