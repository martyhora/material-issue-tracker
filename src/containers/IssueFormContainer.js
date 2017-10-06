import * as React from 'react';
import IssueForm from '../components/IssueForm';

const defaultIssue = {
  text: '',
  dueDate: null,
  isStarred: false,
  projectId: null,
};

export default class IssueFormContainer extends React.Component {
  state = {
    newIssue: this.props.issue ? this.props.issue : defaultIssue,
    error: false,
  };

  onNewIssueTextUpdate(text) {
    this.setState({ newIssue: { ...this.state.newIssue, text } });
  }

  onNewIssueDueDateUpdate(dueDate) {
    this.setState({ newIssue: { ...this.state.newIssue, dueDate } });
  }

  onIssueAdd() {
    if (this.state.newIssue.text.trim() === '') {
      this.setState({ error: true });

      return;
    }

    this.props.onIssueAdd({
      ...this.state.newIssue,
      projectId: this.props.selectedProject
        ? this.props.selectedProject
        : this.state.newIssue.projectId,
    });

    this.setState({ newIssue: defaultIssue, error: false });
  }

  onIssueSubmit(key) {
    this.setState({ error: false });

    if (key === 'Enter') {
      this.onIssueAdd();
    }
  }

  render() {
    return (
      <IssueForm
        newIssue={this.state.newIssue}
        error={this.state.error}
        isEdit={this.props.isEdit}
        onIssueAdd={this.onIssueAdd.bind(this)}
        onNewIssueTextUpdate={this.onNewIssueTextUpdate.bind(this)}
        onNewIssueDueDateUpdate={this.onNewIssueDueDateUpdate.bind(this)}
        onIssueSubmit={this.onIssueSubmit.bind(this)}
      />
    );
  }
}
