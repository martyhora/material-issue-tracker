import { combineReducers } from 'redux';
import issues from './issues';
import filterToggled from './filterToggled';

const reducers = combineReducers({
  issues,
  filterToggled,
});

export default reducers;
