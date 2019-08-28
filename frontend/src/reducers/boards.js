import { BOARDS_LOADED } from '../constants/actionTypes';

const boards = (state = [], action) => {
  switch (action.type) {
    case BOARDS_LOADED:
      return state.concat(action.payload);

    default:
      return state;
  }
};

export default boards;
