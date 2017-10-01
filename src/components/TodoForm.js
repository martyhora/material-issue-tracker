import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from '../styles';

const TodoForm = ({
  newTodo,
  error,
  onNewTodoTextUpdate,
  onTodoAdd,
  onTodoSubmit,
}) => (
  <div>
    <TextField
      floatingLabelText="New todo"
      style={styles.textField}
      fullWidth={true}
      value={newTodo.newTodoText}
      onChange={e => {
        onNewTodoTextUpdate(e.currentTarget.value);
      }}
      onKeyPress={e => {
        onTodoSubmit(e.key);
      }}
      errorText={error ? 'Todo description is required' : ''}
    />
    <RaisedButton
      className="add-todo-button"
      label="Add todo"
      onClick={onTodoAdd}
      style={styles.addButton}
      primary={true}
    />
  </div>
);

export default TodoForm;
