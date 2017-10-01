import { ADD_TODO, COMPLETE_TODO, TOGGLE_EDIT } from '../actions/actionTypes';

let id = 1;

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      if (action.todo.id) {
        return state.map(
          todo =>
            todo.id === action.todo.id
              ? { ...action.todo, isEdit: !todo.isEdit }
              : todo
        );
      }

      return [...state, { text: action.todo.text, id: id++, completed: false }];
    case COMPLETE_TODO:
      return state.map(todo => {
        return todo.id === action.todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    case TOGGLE_EDIT:
      return state.map(
        todo =>
          todo.id === action.todoId ? { ...todo, isEdit: !todo.isEdit } : todo
      );
    default:
      return state;
  }
};

export default todos;
