import * as React from 'react';
import TodoForm from '../components/TodoForm';

const defaultTodo = {
  newTodoText: '',
};

export default class TodoFormContainer extends React.Component {
  state = {
    newTodo: defaultTodo,
    error: false,
  };

  onNewTodoTextUpdate(newTodoText) {
    this.setState({ newTodo: { ...this.state.newTodoText, newTodoText } });
  }

  onTodoAdd() {
    if (this.state.newTodo.newTodoText.trim() === '') {
      this.setState({ error: true });

      return;
    }

    this.props.onTodoAdd(this.state.newTodo);

    this.setState({ newTodo: defaultTodo, error: false });
  }

  onTodoSubmit(key) {
    this.setState({ error: false });

    if (key === 'Enter') {
      this.onTodoAdd();
    }
  }

  render() {
    return (
      <TodoForm
        newTodo={this.state.newTodo}
        error={this.state.error}
        onTodoAdd={this.onTodoAdd.bind(this)}
        onNewTodoTextUpdate={this.onNewTodoTextUpdate.bind(this)}
        onTodoSubmit={this.onTodoSubmit.bind(this)}
      />
    );
  }
}
