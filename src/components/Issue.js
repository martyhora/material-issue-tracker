import * as React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../styles';
import IssueFormContainer from '../containers/IssueFormContainer';
import { formatDate } from './IssueForm';
import { red500 } from 'material-ui/styles/colors';
import IssueActions from './IssueActions';

const Issue = ({
  issue,
  onIssueComplete,
  onEditToggle,
  onIssueAdd,
  onIssueRemove,
  onIssueStarToggle,
}) => (
  <Paper style={styles.issue} className="row">
    <div
      style={{
        float: 'left',
        paddingTop: '5px',
        marginTop: issue.isEdit ? '-25px' : 0,
        width: issue.isEdit ? '100%' : '84%',
      }}
    >
      {issue.isEdit ? (
        <IssueFormContainer
          onIssueAdd={onIssueAdd}
          isEdit={true}
          issue={issue}
        />
      ) : (
        <div className="row">
          <div
            style={{
              textDecoration: issue.completed ? 'line-through' : '',
              color: issue.completed ? 'rgba(0, 0, 0, 0.3)' : '#000',
              float: 'left',
            }}
          >
            {issue.text}
          </div>
          <div
            style={{
              marginTop: '0.3em',
              float: 'right',
              fontSize: '0.7em',
              color: new Date() >= issue.dueDate ? red500 : '#000',
            }}
          >
            {issue.dueDate ? `${formatDate(issue.dueDate)}` : ''}
          </div>
        </div>
      )}
    </div>

    {!issue.isEdit && (
      <IssueActions
        issue={issue}
        onIssueStarToggle={onIssueStarToggle}
        onEditToggle={onEditToggle}
        onIssueRemove={onIssueRemove}
        onIssueComplete={onIssueComplete}
      />
    )}
  </Paper>
);

export default Issue;
