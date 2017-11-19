import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import styles from '../styles';
import { blueColor, redColor } from '../styles/colors';

const validateForm = project => project.name.trim().length > 0;

const ProjectForm = ({
  newProject,
  error,
  dialogOpen,
  onNewProjectNameUpdate,
  onProjectAdd,
  onProjectSubmit,
  removeProject,
  toggleDialog,
  cancelDialog,
}) => (
  <div>
    <Dialog
      title={`${newProject.id ? 'Edit' : 'Add a new'} project`}
      modal={true}
      open={dialogOpen}
    >
      <TextField
        floatingLabelText="Project name"
        fullWidth={true}
        value={newProject.name}
        onChange={e => {
          onNewProjectNameUpdate(e.currentTarget.value);
        }}
        onKeyPress={e => {
          onProjectSubmit(e.key);
        }}
        errorText={error ? 'Project description is required' : ''}
      />
      <RaisedButton
        className="add-issue-button"
        label="Cancel"
        onClick={cancelDialog}
        backgroundColor={redColor}
        labelColor="#fff"
        style={{ ...styles.addButton, float: 'left', marginRight: '15px' }}
      />
      {newProject.id && (
        <RaisedButton
          className="add-issue-button"
          label="Remove"
          onClick={() => {
            removeProject(newProject.id);
          }}
          backgroundColor={redColor}
          labelColor="#fff"
          style={{ ...styles.addButton, float: 'left', marginRight: '15px' }}
        />

        // <DeleteIcon
        //   style={{ ...styles.icon, marginTop: '35px', marginRight: '10px' }}
        //   onClick={() => {
        //     removeProject(newProject.id);
        //   }}
        //   color={redColor}
        // />
      )}
      <RaisedButton
        className="add-issue-button"
        label={`${newProject.id ? 'Edit' : 'Add'} project`}
        onClick={onProjectAdd}
        style={styles.addButton}
        backgroundColor={blueColor}
        labelColor="#fff"
        disabled={!validateForm(newProject)}
      />
    </Dialog>

    <FloatingActionButton
      // style={styles.addProjectButton}
      className="project-add-button"
      onClick={toggleDialog}
      backgroundColor={redColor}
    >
      <ContentAddIcon />
    </FloatingActionButton>
  </div>
);

export default ProjectForm;
