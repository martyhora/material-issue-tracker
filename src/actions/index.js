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

export const addIssue = issue => ({
  type: ADD_ISSUE,
  issue,
});

export const completeIssue = issueId => ({
  type: COMPLETE_ISSUE,
  issueId,
});

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});

export const toggleEdit = issueId => ({
  type: TOGGLE_EDIT,
  issueId,
});

export const removeIssue = issueId => ({
  type: REMOVE_ISSUE,
  issueId,
});

export const toggleIssueStar = issueId => ({
  type: TOGGLE_ISSUE_STAR,
  issueId,
});

export const updateFulltextFilter = text => ({
  type: UPDATE_FULLTEXT_FILTER,
  text,
});

export const addProject = project => ({
  type: ADD_PROJECT,
  project,
});

export const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId,
});

export const onProjectEditSelect = projectId => ({
  type: TOGGLE_PROJECT_EDIT,
  projectId,
});

export const selectProject = projectId => ({
  type: SELECT_PROJECT,
  projectId,
});

export const onProjectEditCancel = () => ({
  type: CANCEL_PROJECT_EDIT,
});
