import { combineReducers } from 'redux';

import { boards, posts } from './boards';

export default combineReducers({
  boards,
  posts,
});
