import * as React from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoComplete,
  onEditToggle,
  onTodoAdd,
  onTodoRemove,
}) => (
  <div>
    {todos.map((todo, i) => (
      <Todo
        key={i}
        todo={todo}
        onTodoComplete={onTodoComplete}
        onEditToggle={onEditToggle}
        onTodoAdd={onTodoAdd}
        onTodoRemove={onTodoRemove}
      />
    ))}
  </div>
);

export default TodoList;
