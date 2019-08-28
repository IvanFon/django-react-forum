import { combineReducers } from 'redux';

import { board, boards } from './boards';
import { comments, post } from './posts';

export default combineReducers({
  comments,
  board,
  boards,
  post,
});
