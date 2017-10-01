import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from '../styles';

const validateForm = todo => todo.text.trim().length > 0;

const TodoForm = ({
  newTodo,
  error,
  onNewTodoTextUpdate,
  onTodoAdd,
  onTodoSubmit,
  isEdit,
}) => (
  <div>
    <TextField
      floatingLabelText="Todo description"
      style={styles.textField}
      fullWidth={true}
      value={newTodo.text}
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
      label={`${isEdit ? 'Edit' : 'Add'} todo`}
      onClick={onTodoAdd}
      style={styles.addButton}
      primary={true}
      disabled={!validateForm(newTodo)}
    />
  </div>
);

export default TodoForm;
