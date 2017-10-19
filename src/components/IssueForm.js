import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import styles from '../styles';
import { blueColor } from '../styles/colors';

const validateForm = issue => issue.text.trim().length > 0;

export const formatDate = date =>
  `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

const IssueForm = ({
  newIssue,
  error,
  onNewIssueTextUpdate,
  onNewIssueDueDateUpdate,
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
    <DatePicker
      style={styles.datepicker}
      formatDate={formatDate}
      value={newIssue.dueDate}
      onChange={(e, date) => {
        onNewIssueDueDateUpdate(date);
      }}
      hintText="Due date"
    />
    <RaisedButton
      className="add-issue-button"
      label={`${isEdit ? 'Edit' : 'Add'} issue`}
      onClick={onIssueAdd}
      style={styles.addButton}
      backgroundColor={blueColor}
      labelColor="#fff"
      disabled={!validateForm(newIssue)}
    />
  </div>
);

export default IssueForm;
