import {
  POST_LOADED,
} from '../constants/actionTypes';

const initPostState = {
  title: '',
  text: '',
  date: '',
};

export const post = (state = initPostState, action) => {
  switch (action.type) {
    case POST_LOADED:
      return {
        title: action.payload.title,
        text: action.payload.text,
        date: action.payload.date_added,
      };

    default:
      return state;
  }
};
