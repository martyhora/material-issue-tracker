import * as React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import styles from '../styles';
import TodoFormContainer from '../containers/TodoFormContainer';

const Todo = ({
  todo,
  onTodoComplete,
  onEditToggle,
  onTodoAdd,
  onTodoRemove,
}) => (
  <Paper style={styles.todo} className="row">
    <div
      style={{
        float: 'left',
        paddingTop: '5px',
        marginTop: todo.isEdit ? '-25px' : 0,
        width: todo.isEdit ? '100%' : 'auto',
      }}
    >
      {todo.isEdit ? (
        <TodoFormContainer onTodoAdd={onTodoAdd} isEdit={true} todo={todo} />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : '',
            color: todo.completed ? 'rgba(0, 0, 0, 0.3)' : '#000',
          }}
        >
          {todo.text}
        </span>
      )}
    </div>

    {!todo.isEdit && (
      <div
        style={{
          float: 'right',
          marginTop: todo.isEdit ? '15px' : 0,
        }}
      >
        <ModeEditIcon
          style={styles.icon}
          onClick={() => {
            onEditToggle(todo.id);
          }}
        />
        <DeleteIcon
          style={styles.icon}
          onClick={() => {
            onTodoRemove(todo.id);
          }}
        />
        <Checkbox
          label=""
          checked={todo.completed}
          onCheck={() => {
            onTodoComplete(todo.id);
          }}
          style={{ ...styles.icon, width: '40px' }}
        />
      </div>
    )}
  </Paper>
);

export default Todo;
