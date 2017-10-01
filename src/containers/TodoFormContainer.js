import * as React from 'react';
import TodoForm from '../components/TodoForm';

const defaultTodo = {
  text: '',
};

export default class TodoFormContainer extends React.Component {
  state = {
    newTodo: this.props.todo ? this.props.todo : defaultTodo,
    error: false,
  };

  onNewTodoTextUpdate(text) {
    this.setState({ newTodo: { ...this.state.newTodo, text } });
  }

  onTodoAdd() {
    if (this.state.newTodo.text.trim() === '') {
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
        isEdit={this.props.isEdit}
        onTodoAdd={this.onTodoAdd.bind(this)}
        onNewTodoTextUpdate={this.onNewTodoTextUpdate.bind(this)}
        onTodoSubmit={this.onTodoSubmit.bind(this)}
      />
    );
  }
}
