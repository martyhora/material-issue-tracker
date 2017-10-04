import {
  ADD_ISSUE,
  COMPLETE_ISSUE,
  REMOVE_ISSUE,
  TOGGLE_EDIT,
  TOGGLE_FILTER,
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
