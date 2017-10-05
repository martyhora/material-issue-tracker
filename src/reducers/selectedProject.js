import { SELECT_PROJECT } from '../actions/actionTypes';

const defaultState = 1;

const selectedProject = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.projectId;
    default:
      return state;
  }
};

export default selectedProject;
