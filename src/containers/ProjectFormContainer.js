import * as React from 'react';
import ProjectForm from '../components/ProjectForm';

const defaultProject = {
  name: '',
  isEdit: false,
};

export default class ProjectFormContainer extends React.Component {
  state = {
    newProject: this.props.project ? this.props.project : defaultProject,
    error: false,
    dialogOpen: !!this.props.project,
  };

  onNewProjectNameUpdate(name) {
    this.setState({ newProject: { ...this.state.newProject, name } });
  }

  onProjectAdd() {
    if (this.state.newProject.name.trim() === '') {
      this.setState({ error: true });

      return;
    }

    this.props.onProjectAdd({
      ...this.state.newProject,
      projectId: this.props.selectedProject,
    });

    this.setState({
      newProject: defaultProject,
      error: false,
      dialogOpen: false,
    });
  }

  onProjectSubmit(key) {
    this.setState({ error: false });

    if (key === 'Enter') {
      this.onProjectAdd();
    }
  }

  toggleDialog() {
    this.setState({ dialogOpen: !this.state.dialogOpen });
  }

  cancelDialog() {
    this.props.onProjectEditCancel();

    this.setState({ dialogOpen: false });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project && nextProps.project.id) {
      this.setState({ newProject: nextProps.project, dialogOpen: true });
    } else {
      this.setState({ newProject: defaultProject });
    }
  }

  render() {
    return (
      <ProjectForm
        newProject={this.state.newProject}
        error={this.state.error}
        dialogOpen={this.state.dialogOpen}
        toggleDialog={this.toggleDialog.bind(this)}
        cancelDialog={this.cancelDialog.bind(this)}
        onProjectAdd={this.onProjectAdd.bind(this)}
        onProjectSubmit={this.onProjectSubmit.bind(this)}
        onNewProjectNameUpdate={this.onNewProjectNameUpdate.bind(this)}
      />
    );
  }
}
