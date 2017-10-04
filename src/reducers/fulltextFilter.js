import { UPDATE_FULLTEXT_FILTER } from '../actions/actionTypes';

const fulltextFilter = (state = '', action) => {
  switch (action.type) {
    case UPDATE_FULLTEXT_FILTER:
      return action.text;
    default:
      return state;
  }
};

export default fulltextFilter;
