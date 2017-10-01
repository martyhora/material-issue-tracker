import { combineReducers } from 'redux';
import todos from './todos';
import filterToggled from './filterToggled';

const reducers = combineReducers({
  todos,
  filterToggled,
});

export default reducers;
