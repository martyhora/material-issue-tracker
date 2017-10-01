import * as React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoComplete }) => (
  <div>
    {todos.map((todo, i) => (
      <Todo key={i} todo={todo} onTodoComplete={onTodoComplete} />
    ))}
  </div>
);

export default TodoList;
