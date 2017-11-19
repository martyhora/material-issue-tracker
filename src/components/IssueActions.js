import * as React from 'react';
import styles from '../styles';
import StarToggle from './StarToggle';
import { red500 } from 'material-ui/styles/colors';
import { Checkbox } from 'material-ui';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const IssueActions = ({
  issue,
  onIssueComplete,
  onEditToggle,
  onIssueRemove,
  onIssueStarToggle,
}) => (
  <div
    className="actions"
    style={{
      marginTop: issue.isEdit ? '15px' : 0,
    }}
  >
    <StarToggle
      toggled={issue.isStarred}
      onToggle={() => {
        onIssueStarToggle(issue.id);
      }}
    />
    <ModeEditIcon
      style={styles.icon}
      onClick={() => {
        onEditToggle(issue.id);
      }}
    />
    <DeleteIcon
      style={styles.icon}
      onClick={() => {
        onIssueRemove(issue.id);
      }}
      color={red500}
    />
    <Checkbox
      label=""
      checked={issue.completed}
      onCheck={() => {
        onIssueComplete(issue.id);
      }}
      style={{ ...styles.icon, width: '40px' }}
    />
  </div>
);

export default IssueActions;
