import { combineReducers } from 'redux';

import { board, boards } from './boards';
import { comments, post } from './posts';
import { login, register, user } from './auth';

export default combineReducers({
  board,
  boards,
  comments,
  login,
  post,
  register,
  user,
});
