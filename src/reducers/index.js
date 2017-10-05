import { combineReducers } from 'redux';
import issues from './issues';
import filterToggled from './filterToggled';
import fulltextFilter from './fulltextFilter';
import projects from './projects';
import selectedProject from './selectedProject';

const reducers = combineReducers({
  issues,
  projects,
  selectedProject,
  filterToggled,
  fulltextFilter,
});

export default reducers;
