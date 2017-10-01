import {
  ADD_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  TOGGLE_EDIT,
  TOGGLE_FILTER,
} from './actionTypes';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo,
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

export const toggleEdit = todoId => {
  return {
    type: TOGGLE_EDIT,
    todoId,
  };
};

export const removeTodo = todoId => {
  return {
    type: REMOVE_TODO,
    todoId,
  };
};
