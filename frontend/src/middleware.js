import {
  COMMENTS_LOADED,
  POSTS_LOADED,
  POST_LOADED,
} from './constants/actionTypes';

const formatDate = date_added => {
  const date = new Date(date_added);
  return date.toLocaleDateString() +
              ' at ' + (date.getHours() + 1) +
              ':' + (date.getMinutes() + 1);
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

    case POST_LOADED:
      action.payload.date = formatDate(action.payload.date_added);
      delete action.payload.date_added;
      return next(action);

    default:
      return next(action);
  }
};
