import * as React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import styles from '../styles';

const Todo = ({ todo, onTodoComplete }) => (
  <Paper style={styles.todo} className="row">
    <div
      style={{
        float: 'left',
        paddingTop: '5px',
        textDecoration: todo.completed ? 'line-through' : '',
        color: todo.completed ? 'rgba(0, 0, 0, 0.3)' : '#000',
      }}
    >
      {todo.text}
    </div>

    <div style={styles.todoActions}>
      <Checkbox
        label=""
        checked={todo.completed}
        onCheck={() => {
          onTodoComplete(todo.id);
        }}
      />
    </div>
  </Paper>
);

export default Todo;
