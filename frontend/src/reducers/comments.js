import {
  COMMENTS_LOADED,
  NEW_COMMENT_CLEAR,
  NEW_COMMENT_FAIL,
  NEW_COMMENT_PENDING,
  NEW_COMMENT_SUCCESS,
} from '../constants/actionTypes';

export const comments = (state = [], action) => {
  switch (action.type) {
    case COMMENTS_LOADED:
      return action.payload;

    // User added a new comment, add it to listing
    case NEW_COMMENT_SUCCESS:
      // author -> username
      const comment = Object.assign({}, action.payload);
      comment.author = comment.username;
      delete comment.username;

      return [
        ...state,
        comment
      ];

    default:
      return state;
  }
};

const initNewCommentState = {
  loading: false,
  success: false,
  errors: null,
};

export const newComment = (state = initNewCommentState, action) => {
  switch (action.type) {
    case NEW_COMMENT_CLEAR:
      return {
        ...initNewCommentState
      };

    case NEW_COMMENT_PENDING:
      return {
        ...initNewCommentState,
        loading: true,
      };

    case NEW_COMMENT_SUCCESS:
      return {
        ...initNewCommentState,
        success: true,
      };

    case NEW_COMMENT_FAIL:
      return {
        ...initNewCommentState,
        errors: action.payload,
      };

    default:
      return state;
  }
};
