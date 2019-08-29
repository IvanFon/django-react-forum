import { combineReducers } from 'redux';

import { board, boards } from './boards';
import { comments, newPost, post } from './posts';
import { login, register, user } from './auth';

export default combineReducers({
  board,
  boards,
  comments,
  login,
  newPost,
  post,
  register,
  user,
});
