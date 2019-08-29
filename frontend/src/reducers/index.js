import { combineReducers } from 'redux';

import { board, boards } from './boards';
import { comments, newComment } from './comments';
import { login, register, user } from './auth';
import { newPost, post } from './posts';

export default combineReducers({
  board,
  boards,
  comments,
  login,
  newComment,
  newPost,
  post,
  register,
  user,
});
