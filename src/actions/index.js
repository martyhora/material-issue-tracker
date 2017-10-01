import { ADD_TODO, COMPLETE_TODO, TOGGLE_FILTER } from './actionTypes';

export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    newTodo,
  };
};

export const completeTodo = todoId => {
  return {
    type: COMPLETE_TODO,
    todoId,
  };
};

export const toggleFilter = () => {
  return {
    type: TOGGLE_FILTER,
  };
};
