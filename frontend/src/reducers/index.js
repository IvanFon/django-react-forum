import { combineReducers } from 'redux';

import boards from './boards';
import posts from './posts';

export default combineReducers({
  boards,
  posts,
});
