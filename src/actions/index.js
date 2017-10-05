import {
  ADD_ISSUE,
  COMPLETE_ISSUE,
  REMOVE_ISSUE,
  TOGGLE_EDIT,
  TOGGLE_FILTER,
  TOGGLE_ISSUE_STAR,
  UPDATE_FULLTEXT_FILTER,
  ADD_PROJECT,
  REMOVE_PROJECT,
  TOGGLE_PROJECT_EDIT,
  SELECT_PROJECT,
  CANCEL_PROJECT_EDIT,
} from './actionTypes';

export const addIssue = issue => {
  return {
    type: ADD_ISSUE,
    issue,
  };
};

export const completeIssue = issueId => {
  return {
    type: COMPLETE_ISSUE,
    issueId,
  };
};

export const toggleFilter = () => {
  return {
    type: TOGGLE_FILTER,
  };
};

export const toggleEdit = issueId => {
  return {
    type: TOGGLE_EDIT,
    issueId,
  };
};

export const removeIssue = issueId => {
  return {
    type: REMOVE_ISSUE,
    issueId,
  };
};

export const toggleIssueStar = issueId => {
  return {
    type: TOGGLE_ISSUE_STAR,
    issueId,
  };
};

export const updateFulltextFilter = text => {
  return {
    type: UPDATE_FULLTEXT_FILTER,
    text,
  };
};

export const addProject = project => {
  return {
    type: ADD_PROJECT,
    project,
  };
};

export const removeProject = projectId => {
  return {
    type: REMOVE_PROJECT,
    projectId,
  };
};

export const onProjectEditSelect = projectId => {
  return {
    type: TOGGLE_PROJECT_EDIT,
    projectId,
  };
};

export const selectProject = projectId => {
  return {
    type: SELECT_PROJECT,
    projectId,
  };
};

export const onProjectEditCancel = () => {
  return {
    type: CANCEL_PROJECT_EDIT,
  };
};
