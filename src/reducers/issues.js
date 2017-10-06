import shortid from 'shortid';
import {
  ADD_ISSUE,
  COMPLETE_ISSUE,
  REMOVE_ISSUE,
  TOGGLE_EDIT,
  TOGGLE_ISSUE_STAR,
} from '../actions/actionTypes';

const issues = (state = [], action) => {
  switch (action.type) {
    case ADD_ISSUE:
      if (action.issue.id) {
        return state.map(
          issue =>
            issue.id === action.issue.id
              ? { ...action.issue, isEdit: !issue.isEdit }
              : issue
        );
      }

      return [
        ...state,
        { ...action.issue, id: shortid.generate(), completed: false },
      ];
    case COMPLETE_ISSUE:
      return state.map(issue => {
        return issue.id === action.issueId
          ? { ...issue, completed: !issue.completed }
          : issue;
      });
    case TOGGLE_ISSUE_STAR:
      return state.map(issue => {
        return issue.id === action.issueId
          ? { ...issue, isStarred: !issue.isStarred }
          : issue;
      });
    case TOGGLE_EDIT:
      return state.map(
        issue =>
          issue.id === action.issueId
            ? { ...issue, isEdit: !issue.isEdit }
            : issue
      );
    case REMOVE_ISSUE:
      return state.filter(issue => issue.id !== action.issueId);
    default:
      return state;
  }
};

export default issues;
