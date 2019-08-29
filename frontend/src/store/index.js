import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { dateFormatMiddleware } from '../middleware';

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,

      dateFormatMiddleware,
    ),
  ),
);

export default store;
