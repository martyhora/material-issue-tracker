import { TOGGLE_FILTER } from '../actions/actionTypes';

const filterToggled = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return !state;
    default:
      return state;
  }
};

export default filterToggled;
