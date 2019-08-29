import {
  COMMENTS_LOADED,
  NEW_POST_CLEAR,
  NEW_POST_FAIL,
  NEW_POST_PENDING,
  NEW_POST_SUCCESS,
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

const initNewPostState = {
  loading: false,
  success: false,
  errors: null,
  id: -1,
};

export const newPost = (state = initNewPostState, action) => {
  switch (action.type) {
    case NEW_POST_CLEAR:
      return initNewPostState;

    case NEW_POST_PENDING:
      return {
        ...initNewPostState,
        loading: true,
      };

    case NEW_POST_SUCCESS:
      return {
        ...initNewPostState,
        success: true,
        id: action.payload,
      };

    case NEW_POST_FAIL:
      return {
        ...initNewPostState,
        errors: action.payload,
      };

    default:
      return state;
  }
};
