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
  selectProject,
  addProject,
  removeProject,
  onProjectEditSelect,
  onProjectEditCancel,
} from '../actions';
import FilterForm from '../components/FilterForm';
import ProjectFormContainer from './ProjectFormContainer';
import ProjectsMenu from '../components/ProjectsMenu';

const App = ({
  issues,
  projects,
  selectedProject,
  filterToggled,
  fulltextFilter,
  projectToEdit,
  onIssueAdd,
  onIssueComplete,
  onFilterToggle,
  onEditToggle,
  onIssueRemove,
  onIssueStarToggle,
  onFulltextFilterUpdate,
  onProjectSelect,
  onProjectAdd,
  onProjectRemove,
  onProjectEditSelect,
  onProjectEditCancel,
}) => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Material Issue Tracker" />

      <div className="col-2">
        <Paper>
          <ProjectsMenu
            projects={projects}
            selectedProject={selectedProject}
            onProjectSelect={onProjectSelect}
            onProjectEditSelect={onProjectEditSelect}
          />
        </Paper>
      </div>

      <div className="col-10">
        <Paper style={styles.issueList}>
          <div className="row">
            <IssueFormContainer
              onIssueAdd={onIssueAdd}
              isEdit={false}
              selectedProject={selectedProject}
            />
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

      <ProjectFormContainer
        project={projectToEdit}
        onProjectAdd={onProjectAdd}
        onProjectEditCancel={onProjectEditCancel}
        onProjectRemove={onProjectRemove}
      />
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = state => {
  let issues = [...state.issues]
    .filter(issue => issue.projectId === state.selectedProject)
    .filter(issue => issue.text.indexOf(state.fulltextFilter) > -1);

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

  const { projects } = state;

  return {
    issues,
    projects,
    projectToEdit:
      projects.filter(project => project.isEdit).length > 0
        ? projects.filter(project => project.isEdit)[0]
        : null,
    selectedProject: state.selectedProject,
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
  onProjectSelect: projectId => {
    dispatch(selectProject(projectId));
  },
  onProjectAdd: project => {
    dispatch(addProject(project));
  },
  onProjectRemove: projectId => {
    dispatch(removeProject(projectId));
  },
  onProjectEditSelect: projectId => {
    dispatch(onProjectEditSelect(projectId));
  },
  onProjectEditCancel: () => {
    dispatch(onProjectEditCancel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
