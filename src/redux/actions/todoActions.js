import * as types from "./types";

export const addTodo = (todo) => {
  return { type: types.ADD_TODO, payload: todo };
};

export const deleteTodo = (id) => {
  return { type: types.DELETE_TODO, payload: id };
};

export const updateNewTodo = (newTodo) => {
  return { type: types.UPDATE_NEW_TODO, payload: newTodo };
};

export const updateSearchQuery = (searchQuery) => {
  return { type: types.UPDATE_SEARCH_QUERY, payload: searchQuery };
};

export const toggleSort = () => {
  return { type: types.TOGGLE_SORT };
};

export const setTodos = (todos) => {
  return { type: types.SET_TODOS, payload: todos };
};
