import {
  ADD_PROJECT,
  CANCEL_PROJECT_EDIT,
  REMOVE_PROJECT,
  TOGGLE_PROJECT_EDIT,
} from '../actions/actionTypes';

const defaultState = [{ id: 1, name: 'Default project', isEdit: false }];

let id = defaultState.length + 1;

const projects = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      if (action.project.id) {
        return state.map(
          project =>
            project.id === action.project.id
              ? { ...action.project, isEdit: !project.isEdit }
              : project
        );
      }

      return [...state, { ...action.project, id: id++ }];
    case TOGGLE_PROJECT_EDIT:
      return state.map(
        project =>
          project.id === action.projectId
            ? { ...project, isEdit: !project.isEdit }
            : project
      );
    case REMOVE_PROJECT:
      return state.filter(project => project.id !== action.projectId);
    case CANCEL_PROJECT_EDIT:
      return state.map(project => ({ ...project, isEdit: false }));
    default:
      return state;
  }
};

export default projects;
