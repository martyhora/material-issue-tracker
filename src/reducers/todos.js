import { ADD_TODO, COMPLETE_TODO } from '../actions/actionTypes';

let id = 1;

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.newTodo.newTodoText, id: id++, completed: false },
      ];
    case COMPLETE_TODO:
      return state.map(todo => {
        return todo.id === action.todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};

export default todos;
