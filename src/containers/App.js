import * as React from 'react';
import '../styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import styles from '../styles';
import '../index.css';
import IssueFormContainer from './IssueFormContainer';
import IssueList from '../components/IssueList';
import { connect } from 'react-redux';
import {
  completeIssue,
  toggleEdit,
  toggleFilter,
  addIssue,
  removeIssue,
  toggleIssueStar,
  updateFulltextFilter,
} from '../actions';
import FilterForm from '../components/FilterForm';

const App = ({
  issues,
  filterToggled,
  fulltextFilter,
  onIssueAdd,
  onIssueComplete,
  onFilterToggle,
  onEditToggle,
  onIssueRemove,
  onIssueStarToggle,
  onFulltextFilterUpdate,
}) => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Material Issue Tracker" />
      <Paper style={styles.issueList}>
        <div className="row">
          <IssueFormContainer onIssueAdd={onIssueAdd} isEdit={false} />
        </div>

        <div className="row" style={styles.filter}>
          <Toggle
            label="Hide completed issues"
            labelPosition="right"
            toggled={filterToggled}
            onToggle={onFilterToggle}
          />
        </div>

        <FilterForm
          onTextUpdate={onFulltextFilterUpdate}
          text={fulltextFilter}
        />

        <IssueList
          issues={issues}
          onIssueComplete={onIssueComplete}
          onIssueAdd={onIssueAdd}
          onEditToggle={onEditToggle}
          onIssueRemove={onIssueRemove}
          onIssueStarToggle={onIssueStarToggle}
        />
      </Paper>
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = state => {
  let issues = [...state.issues].filter(
    issue => issue.text.indexOf(state.fulltextFilter) > -1
  );

  if (state.filterToggled) {
    issues = issues.filter(issue => !issue.completed);
  } else {
    issues
      .sort((a, b) => {
        if (a.isStarred > b.isStarred) {
          return -1;
        }

        if (a.isStarred < b.isStarred) {
          return 1;
        }

        return 0;
      })
      .sort((a, b) => {
        if (a.completed > b.completed) {
          return 1;
        }

        if (a.completed < b.completed) {
          return -1;
        }

        return 0;
      });
  }

  return {
    issues,
    fulltextFilter: state.fulltextFilter,
    filterToggled: state.filterToggled,
  };
};

const mapDispatchToProps = dispatch => ({
  onIssueAdd: issue => {
    dispatch(addIssue(issue));
  },
  onIssueComplete: issueId => {
    dispatch(completeIssue(issueId));
  },
  onFilterToggle: () => {
    dispatch(toggleFilter());
  },
  onEditToggle: issueId => {
    dispatch(toggleEdit(issueId));
  },
  onIssueRemove: issueId => {
    dispatch(removeIssue(issueId));
  },
  onIssueStarToggle: issueId => {
    dispatch(toggleIssueStar(issueId));
  },
  onFulltextFilterUpdate: text => {
    dispatch(updateFulltextFilter(text));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
