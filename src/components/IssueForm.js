import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from '../styles';

const validateForm = issue => issue.text.trim().length > 0;

const IssueForm = ({
  newIssue,
  error,
  onNewIssueTextUpdate,
  onIssueAdd,
  onIssueSubmit,
  isEdit,
}) => (
  <div>
    <TextField
      floatingLabelText="Issue description"
      style={styles.textField}
      fullWidth={true}
      value={newIssue.text}
      onChange={e => {
        onNewIssueTextUpdate(e.currentTarget.value);
      }}
      onKeyPress={e => {
        onIssueSubmit(e.key);
      }}
      errorText={error ? 'Issue description is required' : ''}
    />
    <RaisedButton
      className="add-issue-button"
      label={`${isEdit ? 'Edit' : 'Add'} issue`}
      onClick={onIssueAdd}
      style={styles.addButton}
      primary={true}
      disabled={!validateForm(newIssue)}
    />
  </div>
);

export default IssueForm;
