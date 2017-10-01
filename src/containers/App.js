import * as React from 'react';
import '../styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import styles from '../styles';
import '../index.css';
import TodoFormContainer from './TodoFormContainer';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { completeTodo, toggleFilter } from '../actions/index';

const App = ({
  todos,
  filterToggled,
  onTodoAdd,
  onTodoComplete,
  onFilterToggle,
}) => (
  <MuiThemeProvider>
    <div>
      <AppBar title="Material TODO" />
      <Paper style={styles.todoList}>
        <div className="row">
          <TodoFormContainer onTodoAdd={onTodoAdd} />
        </div>

        <div className="row">
          <div style={styles.filter}>
            <Toggle
              label="Hide completed todos"
              labelPosition="right"
              toggled={filterToggled}
              onToggle={onFilterToggle}
            />
          </div>
        </div>

        <div className="row">
          <TodoList todos={todos} onTodoComplete={onTodoComplete} />
        </div>
      </Paper>
    </div>
  </MuiThemeProvider>
);

const mapStateToProps = state => {
  let todos = [...state.todos];

  if (state.filterToggled) {
    todos = todos.filter(todo => !todo.completed);
  } else {
    todos.sort((a, b) => {
      if (a.completed > b.completed) {
        return 1;
      }

      if (a.completed < b.completed) {
        return -1;
      }

      return 0;
    });
  }

  return {
    todos,
    filterToggled: state.filterToggled,
  };
};

const mapDispatchToProps = dispatch => ({
  onTodoAdd: todo => {
    dispatch(addTodo(todo));
  },
  onTodoComplete: todoId => {
    dispatch(completeTodo(todoId));
  },
  onFilterToggle: () => {
    dispatch(toggleFilter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
