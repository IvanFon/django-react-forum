import { combineReducers } from 'redux';

import { board, boards } from './boards';
import { post } from './posts';

export default combineReducers({
  board,
  boards,
  post,
});
