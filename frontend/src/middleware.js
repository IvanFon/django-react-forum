import {
  COMMENTS_LOADED,
  NEW_COMMENT_SUCCESS,
  POSTS_LOADED,
  POST_LOADED,
} from './constants/actionTypes';

const formatDate = date_added => {
  const date = new Date(date_added);
  return date.toLocaleDateString() + ' at ' +
    date.getHours() + ':' +
    (('0' + date.getMinutes()).slice(-2));
};

export const dateFormatMiddleware = store => next => action => {
  switch (action.type) {
    case COMMENTS_LOADED:
    case POSTS_LOADED:
      action.payload = action.payload.map(item => {
        item.date = formatDate(item.date_added);
        return item;
      });
      return next(action);

    case NEW_COMMENT_SUCCESS:
    case POST_LOADED:
      action.payload.date = formatDate(action.payload.date_added);
      delete action.payload.date_added;
      return next(action);

    default:
      return next(action);
  }
};
