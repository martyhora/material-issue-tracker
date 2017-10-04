import { combineReducers } from 'redux';
import issues from './issues';
import filterToggled from './filterToggled';
import fulltextFilter from './fulltextFilter';

const reducers = combineReducers({
  issues,
  filterToggled,
  fulltextFilter,
});

export default reducers;
