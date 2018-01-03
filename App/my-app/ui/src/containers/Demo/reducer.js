import { fromJS } from 'immutable';
import * as at from './actionTypes';

const INITIAL_STATE = fromJS({
  count: 0,
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case at.ADD_COUNT:
      return state.update('count', count => count + 1);
    case at.MINUS_COUNT:
      return state.update('count', count => count - 1);
    default:
      return state;
  }
};
